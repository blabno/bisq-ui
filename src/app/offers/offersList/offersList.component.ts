import _ from 'lodash';
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ModalController} from 'ionic-angular';

import {AlertController} from "ionic-angular";

import {OffersDAO} from '../../shared/DAO/offers.dao';
import {P2pDAO} from '../../shared/DAO/p2p.dao';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {InfoModalService} from '../../shared/components/infoModal/infoModal.service';
import {SettingsService} from '../../shared/services/settings.service';
import {ToastService} from '../../shared/services/toast.service';
import {OfferDetailsComponent} from '../offerDetails/offerDetails.component';

import t from '../../shared/defineTextToTranslate';

t([
  'SELL',
  'BUY'
]);

@Component({
  selector: 'app-offers-list',
  templateUrl: './offersList.component.html'
})
export class OffersListComponent implements OnChanges {

  @Input() data: Array<Object>;
  @Input() prices: Array<Object>;
  @Input() type: 'sell' | 'buy' | 'my-offers';
  @Input() loading: Boolean;
  @Output() refresh = new EventEmitter<any>();

  public NO_FILTER = 'ALL';
  public isFilterVisible;
  public currencyFilter;
  public methodFilter;
  public list = [];
  public currencies = [];
  public accountsList = [];
  public supportedPaymentsMethods = [];
  public supportedPaymentsCurrencies = [];
  private myAddress;

  constructor(public settings: SettingsService,
              private paymentsDAO: PaymentAccountsDAO,
              private router: Router,
              private p2p: P2pDAO,
              private offersDao: OffersDAO,
              private toast: ToastService,
              private translate: TranslateService,
              private infoModal: InfoModalService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
    this.currencyFilter = this.settings.selectedCurrencyOnOfferList || [this.NO_FILTER];
    this.methodFilter = this.settings.selectedPaymentMethodOnOfferList || this.NO_FILTER;
    this.p2p.status().then(res => {
      this.myAddress = _.get(res, 'address');
      return this.paymentsDAO.query();
    }).then((res: any) => {
      this.accountsList = res.paymentAccounts;
      this.supportedPaymentsMethods = _.uniq(_.map(this.accountsList, 'paymentMethod'));
      this.supportedPaymentsCurrencies = _.uniq(_.map(this.accountsList, 'selectedTradeCurrency'));
    }).catch(error => {
      // TODO: handle this error in better way. This is temporary fix to handle missing backend URL in settings
      console.error(error)
    });
  }

  ngOnChanges() {
    this.filterData();
    this.createCurrenciesList()
  }

  onFilterChange() {
    this.filterData();
    if (!_.size(this.currencyFilter)) {
      this.currencyFilter = [this.NO_FILTER];
    }
    this.settings.selectedCurrencyOnOfferList = this.currencyFilter;
    this.settings.selectedPaymentMethodOnOfferList = this.methodFilter;
    this.settings.saveSettings();
  }

  getOfferBTCAmount(item) {
    if (item.minAmount === false || Number(item.minAmount) != Number(item.amount)) {
      return item.minAmount / 1e8 + ' - ' + item.amount / 1e8;
    }
    return item.amount / 1e8;
  }

  getOfferAmount(item) {
    let currency;
    let amount = Number(item.amount) / 1e8;
    let price: any = this.getOfferPrice(item);
    if ('BLOCK_CHAINS' === item.paymentMethodId) {
      currency = item.baseCurrencyCode;
    } else {
      currency = item.counterCurrencyCode;
    }
    if (!item.minAmount || Number(item.minAmount) != Number(item.amount)) {
      let minAmount = Number(item.minAmount) / 1e8;
      return _.round(minAmount * price, 2).toFixed(2) + ' - ' + _.round(amount * price, 2).toFixed(2) + ' ' + currency;
    }
    return _.round(amount * price, 2) + ' ' + currency;
  }

  getOfferPrice(item) {
    if (item.useMarketBasedPrice) {
      const basePrice = this.prices[item.baseCurrencyCode + '_' + item.counterCurrencyCode];
      return _.round(basePrice - basePrice * item.marketPriceMargin, 2).toFixed(2);
    } else {
      return _.round(Number(item.price) / 1e4, 2).toFixed(2);
    }
  }

  getOfferMarketPriceMargin(item) {
    return _.round(item.marketPriceMargin * 100, 2);
  }

  getOfferMarket(item) {
    if ('BLOCK_CHAINS' === item.paymentMethodId) {
      return item.counterCurrencyCode + '/' + item.baseCurrencyCode;
    } else {
      return item.baseCurrencyCode + '/' + item.counterCurrencyCode;
    }
  }

  takeOffer(offer) {
    if (!this.checkIfValidPaymentAccount(offer)) {
      this.infoModal.show({
        title: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_TITLE'),
        text: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_TEXT'),
        redirectButton: {
          text: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_REDIRECT'),
          path: 'BLOCK_CHAINS' === offer.paymentMethodId ? '/account/altcoins' : '/account/currency',
          class: 'center'
        }
      });
      return;
    }

    this.router.navigateByUrl(`offers/${this.type}/take/${offer.id}`);
  }

  deleteOffer(offer) {
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: t('OFFERS.LIST.DELETE_CONFIRM'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('CONFIRM'),
          handler: () => {
            this.offersDao.remove(offer.id).then(() => {
              this.toast.show('TOAST.OFFERS.LIST.DELETED', 'success');
              this.refresh.emit();
            }).catch(error => {
              this.toast.error(error, 'TOAST.OFFERS.LIST.DELETE_ERROR');
            });
          }
        }
      ]
    }).present();
  }

  checkIfValidPaymentAccount(offer) {
    return this.supportedPaymentsMethods.indexOf(offer.paymentMethodId) >= 0 && this.supportedPaymentsCurrencies.indexOf(offer.currencyCode) >= 0;
  }

  offerDetails(offer) {
    this.modalCtrl.create(OfferDetailsComponent, {
      ...offer,
      offerAmount: this.getOfferAmount(offer),
      offerPrice: this.getOfferPrice(offer),
      takeOffer: offer => this.takeOffer(offer)
    }).present();
  }

  offerDetailsMobileOnly(offer) {
    if (992 > window.innerWidth) {
      this.offerDetails(offer)
    }
  }

  toggleFilters() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  private createCurrenciesList() {
    this.currencies = _.chain(this.data)
      .filter({direction: this.type === 'sell' ? 'BUY' : 'SELL'})
      .map(offer => [offer.baseCurrencyCode, offer.counterCurrencyCode])
      .flatten().uniq().without('BTC').value();
  }

  private filterData() {
    if (this.data && this.type && 'my-offers' != this.type) {
      let filteredData = _.chain(this.data);
      const dir = this.type === 'sell' ? 'buy' : 'sell';
      filteredData = filteredData.filter({direction: dir.toUpperCase()});
      if (!_.includes(this.currencyFilter, this.NO_FILTER)) {
        filteredData = filteredData.filter(o => _.includes(this.currencyFilter, o.currencyCode));
      }
      if (this.NO_FILTER !== this.methodFilter) {
        filteredData = filteredData.filter({paymentMethodId: this.methodFilter});
      }
      if (!this.settings.showMyOwnOffersInOfferBook) {
        filteredData = filteredData.filter(o => this.myAddress !== o.ownerNodeAddress);
      }
      this.list = filteredData.value();
    } else if ('my-offers' === this.type) {
      this.list = _.filter(this.data, {ownerNodeAddress: this.myAddress});
    }
  }
}
