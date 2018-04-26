import _ from 'lodash';
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AlertController, ModalController} from 'ionic-angular';

import {OffersDAO} from '../../shared/DAO/offers.dao';
import {NetworkDAO} from '../../shared/DAO/network.dao';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {InfoModalService} from '../../shared/components/infoModal/infoModal.service';
import {SettingsService} from '../../shared/services/settings.service';
import {ToastService} from '../../shared/services/toast.service';
import {OfferDetailsComponent} from '../offerDetails/offerDetails.component';

import t from '../../shared/defineTextToTranslate';
import getValidPaymentAccounts from '../../shared/getValidPaymentAccounts';
import {PreferencesDAO} from '../../shared/DAO/preferences.dao';
import {BackButtonService} from "../../shared/services/backButton.service";

t([
  'SELL',
  'BUY',
  'OFFERS.LIST.DELETE_CONFIRM',
  'OFFERS.LIST.MARKET_PRICE_DETAILS',
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
  public currenciesFromSettings = [];

  private modalCtrlInstance;
  private unregisterBackButton = _.noop;

  constructor(public settings: SettingsService,
              private paymentsDAO: PaymentAccountsDAO,
              private router: Router,
              private networkDAO: NetworkDAO,
              private offersDao: OffersDAO,
              private toast: ToastService,
              private translate: TranslateService,
              private infoModal: InfoModalService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private preferencesDAO: PreferencesDAO,
              private backButton: BackButtonService) {
    this.currencyFilter = this.settings.selectedCurrencyOnOfferList || [this.NO_FILTER];
    this.methodFilter = this.settings.selectedPaymentMethodOnOfferList || this.NO_FILTER;
    this.networkDAO.getP2PNetworkStatus().then(res => {
      this.myAddress = _.get(res, 'address');
      return preferencesDAO.get();
    }).then((settings: any) => {
      this.currenciesFromSettings = [...settings.cryptoCurrencies, ...settings.fiatCurrencies];
      return this.paymentsDAO.query();
    }).then((res: any) => {
      this.accountsList = res.paymentAccounts;
      this.supportedPaymentsMethods = _.uniq(_.map(this.accountsList, 'paymentMethod'));
      this.supportedPaymentsCurrencies = _.intersection(_.uniq(_.map(this.accountsList, 'selectedTradeCurrency')), this.currenciesFromSettings);
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
      const basePrice = Number(this.prices[item.counterCurrencyCode]);
      return _.round(basePrice - basePrice * item.marketPriceMargin, 2).toFixed(2);
    } else {
      return _.round(Number(item.price) / 1e4, 2).toFixed(2);
    }
  }
  
  getOfferMarketPrice(item) {
    return Number(this.prices[item.counterCurrencyCode]).toFixed(2);
  }

  getOfferMarketPriceMargin(item) {
    return _.round(item.marketPriceMargin * 100, 2);
  }

  showPriceDetailsInfo() {
    this.alertCtrl.create({
      title: this.translate.instant('OFFERS.LIST.MARKET_PRICE_DETAILS'),
      message: this.translate.instant('OFFERS.LIST.TO_SHOW_PRICE_DETAILS_OF_OFFER'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        }
      ]
    }).present();
  }
  
  priceDetails(item, event) {
    event.stopPropagation();
    if (!item.useMarketBasedPrice) return;
    this.alertCtrl
      .create({
        title: this.translate.instant('OFFERS.LIST.MARKET_PRICE_DETAILS'),
        message: this.translate.instant('OFFERS.LIST.YOU_WILL_GET', {
          percentage: Math.abs(this.getOfferMarketPriceMargin(item)),
          state:
            item.marketPriceMargin < 0
              ? this.translate.instant('OFFERS.LIST.MORE')
              : this.translate.instant('OFFERS.LIST.LESS')
        }),
        buttons: [
          {
            text: this.translate.instant('CANCEL')
          }
        ]
      })
      .present();
  }

  getOfferMarket(item) {
    return item.baseCurrencyCode + '/' + item.counterCurrencyCode;
  }

  takeOffer(offer) {
    if (getValidPaymentAccounts(offer.paymentMethodId, offer.counterCurrencyCode, this.accountsList).length === 0) {
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
      message: this.translate.instant('OFFERS.LIST.DELETE_CONFIRM'),
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
    let action = {
      deleteOffer: null,
      takeOffer: null
    };
    if (this.myAddress === offer.ownerNodeAddress) {
      action.deleteOffer = offer => {
        this.unregisterBackButton();
        this.deleteOffer(offer);
      }
    }
    else {
      action.takeOffer = offer => {
        this.unregisterBackButton();
        this.takeOffer(offer)
      }
    }
    this.modalCtrlInstance = this.modalCtrl.create(OfferDetailsComponent, {
      ...offer,
      offerAmount: this.getOfferAmount(offer),
      offerPrice: this.getOfferPrice(offer),
      ...action
    });
    this.modalCtrlInstance.present();
    this.unregisterBackButton = this.backButton.register(() => {
      this.unregisterBackButton();
      return this.modalCtrlInstance.dismiss();
    });
  }

  offerDetailsMobileOnly(offer) {
    if (992 > window.innerWidth) {
      this.offerDetails(offer)
    }
  }

  toggleFilters() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  isMyOffer(offer) {
    return this.myAddress === offer.ownerNodeAddress
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
