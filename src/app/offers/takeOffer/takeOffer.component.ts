import _ from 'lodash';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {OffersDAO} from '../../shared/DAO/offers.dao';
import {ToastService} from '../../shared/services/toast.service';
import {MarketPriceService} from '../../shared/services/marketPrice.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-take-offer',
  templateUrl: 'takeOffer.component.html'
})
export class TakeOfferComponent implements OnInit {
  @ViewChild('createForm') createForm;

  constructor(private activeRoute: ActivatedRoute,
              private paymentsDAO: PaymentAccountsDAO,
              private offersDAO: OffersDAO,
              private toast: ToastService,
              private router: Router,
              private marketPrice: MarketPriceService) {
  }

  public accountId;
  public type: 'sell' | 'buy';
  public offerId;
  public offerDetailsRaw: any = {};
  public amountToSell = 0;
  public amountToSellMax = 0;
  public amountToSellMin = 0;
  public costOfBTC = 0;
  public tradeCurrency = '';
  public amountToReceive = 0;
  public paymentMethodId = 0;
  public percentage = 0;
  public isPercentageVisible = false;

  public accountsList = [];
  public supportedAccountsList = [];
  public takingOffer;

  ngOnInit() {
    this.offerId = this.activeRoute.params['value'].offerId;
    this.type = this.activeRoute.params['value'].type;
    this.offersDAO.get(this.offerId).then((offer: any) => {
      this.offerDetailsRaw = offer;
      this.amountToSell = offer.amount / 100000000;
      this.amountToSellMax = offer.amount / 100000000;
      this.amountToSellMin = offer.minAmount / 100000000;
      this.tradeCurrency = offer.counterCurrencyCode;
      this.paymentMethodId = offer.paymentMethodId;
      this.isPercentageVisible = offer.useMarketBasedPrice;
      this.percentage = _.round(offer.marketPriceMargin * 100, 2);
      this.calculateCostOfBTC().then(() => {
        this.calculateAmountToReceive();
      });
      this.paymentsDAO.query().then((offer: any) => {
        this.accountsList = offer.paymentAccounts || [];
        this.supportedAccountsList = _.filter(this.accountsList, [
          'paymentMethod',
          this.paymentMethodId
        ]);
        this.accountId = _.get(this.supportedAccountsList, '[0].id');
      });
    });
  }

  public changeAmountToSell() {
    this.calculateAmountToReceive();
  }

  public calculateCostOfBTC() {
    if (this.offerDetailsRaw.useMarketBasedPrice) {
      return this.marketPrice.get(this.offerDetailsRaw.baseCurrencyCode, this.offerDetailsRaw.counterCurrencyCode)
        .then(basePrice =>
          this.costOfBTC = _.round(basePrice - basePrice * this.offerDetailsRaw.marketPriceMargin, 2).toFixed(2)
        );
    } else {
      this.costOfBTC = _.round(this.offerDetailsRaw.price / 10000, 2).toFixed(2);
      return Promise.resolve();
    }
  }

  public calculateAmountToReceive() {
    this.amountToReceive = _.round(this.amountToSell * this.costOfBTC, 2).toFixed(2);
  }

  public takeOffer() {
    this.takingOffer = true;
    this.offersDAO
      .take(this.offerId, {
        paymentAccountId: this.accountId,
        amount: this.amountToSell * 100000000
      })
      .then(() => {
        this.takingOffer = false;
        this.toast.show(t('OFFERS.TAKE_OFFER.TAKE_OFFER_SUCCESS'), 'success');
        this.router.navigateByUrl('/portfolio/open-trades');
      })
      .catch(error => {
        this.takingOffer = false;
        this.toast.error(error, t('OFFERS.TAKE_OFFER.TAKE_OFFER_ERROR'));
      });
  }
}
