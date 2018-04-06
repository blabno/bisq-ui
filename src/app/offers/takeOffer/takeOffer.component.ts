import _ from 'lodash';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {OffersDAO} from '../../shared/DAO/offers.dao';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-take-offer',
  templateUrl: 'takeOffer.component.html'
})
export class TakeOfferComponent implements OnInit, OnDestroy {
  @ViewChild('createForm') createForm;

  constructor(
    private activeRoute: ActivatedRoute,
    private paymentsDAO: PaymentAccountsDAO,
    private offersDAO: OffersDAO,
    private toast: ToastService,
    private router: Router
  ) {}

  private paramSubscribe: any;
  public accountId;
  public type: 'sell' | 'buy';
  public offerId;
  public offerDetailsRaw = {};
  public amountToSell = 0;
  public amountToSellMin = 0;
  public costOfBTC = 0;
  public amountToReceive = 0;
  public paymentMethodId = 0;

  public accountsList = [];
  public supportedAccountsList = [];
  public takingOffer;
  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.type = params['type'];
      this.offerId = params['offerId'];
      this.offersDAO.get(this.offerId).then((res: any) => {
        this.offerDetailsRaw = res;
        this.amountToSell = parseFloat(res.amount) / 100000000;
        this.amountToSellMin = parseFloat(res.minAmount) / 100000000;
        this.costOfBTC = parseFloat(res.price) / 10000;
        this.paymentMethodId = res.paymentMethodId;
        this.calculateAmountToReceive();
        this.paymentsDAO.query().then((res: any) => {
          this.accountsList = res.paymentAccounts || [];
          this.supportedAccountsList = _.filter(this.accountsList, [
            'paymentMethod',
            this.paymentMethodId
          ]);
          this.accountId = _.get(this.supportedAccountsList, '[0].id');
        });
      });
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  public changeAmountToSell(e) {
    this.calculateAmountToReceive();
  }

  public calculateAmountToReceive() {
    this.amountToReceive = this.amountToSell * this.costOfBTC;
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
