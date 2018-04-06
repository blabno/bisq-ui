import _ from 'lodash';
import {Component, Input, OnChanges} from '@angular/core';
import {SettingsService} from '../../shared/services/settings.service';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {Router} from '@angular/router';

import {P2pDAO} from "../../shared/DAO/p2p.dao";
import {MarketPriceService} from '../../shared/services/marketPrice.service';
import { InfoModalService } from '../../shared/components/infoModal/infoModal.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offersList.component.html'
})
export class OffersListComponent implements OnChanges {

  @Input() data: Array<Object>;
  @Input() prices: Array<Object>;
  @Input() type: 'sell' | 'buy';
  @Input() loading: Boolean;

  public NO_FILTER = 'ALL';
  public currencyFilter;
  public methodFilter;
  public list = [];
  public currencies = [
    {value: 'USD', name: 'USD'},
    {value: 'PLN', name: 'PLN'},
    {value: 'BTC', name: 'BTC'},
    {value: 'DASH', name: 'DASH'},
    {value: 'ETH', name: 'ETH'}
  ];
  public accountsList = [];
  public supportedPaymentsMethods = [];
  public supportedPaymentsCurrencies = [];
  private myAddress;

  constructor(public settings: SettingsService,
              private paymentsDAO: PaymentAccountsDAO,
              private router: Router,
              private p2p: P2pDAO,
              private initModal: InfoModalService) {
    this.currencyFilter = this.settings.selectedCurrencyOnOfferList || this.NO_FILTER;
    this.methodFilter = this.NO_FILTER;
    this.p2p.status().then(res => {
      this.myAddress = _.get(res,'address');
      return this.paymentsDAO.query();
    }).then((res: any) => {
      this.accountsList = res.paymentAccounts;
      this.supportedPaymentsMethods = _.map(this.accountsList, 'paymentMethod');
      this.supportedPaymentsCurrencies = _.map(this.accountsList, 'selectedTradeCurrency');
    }).catch(error => {
      // TODO: handle this error in better way. This is temporary fix to handle missing backend URL in settings
      console.error(error)
    });
  }

  ngOnChanges() {
    this.filterData();
  }

  onCurrencyFilterChange(e) {
    this.filterData();
    this.settings.selectedCurrencyOnOfferList = e;
    this.settings.saveSettings();
  }

  getOfferBTCAmount(item) {
    if (item.minAmount === false || Number(item.minAmount) != Number(item.amount)) {
      return item.minAmount / 100000000 + ' - ' + item.amount / 100000000;
    }
    return item.amount / 100000000;
  }

  getOfferAmount(item) {
    let amount = Number(item.amount) / 100000000;
    let price: any  = this.getOfferPrice(item);
    if (!item.minAmount || Number(item.minAmount) != Number(item.amount)) {
      let minAmount = Number(item.minAmount) / 100000000;
      return _.round(minAmount * price, 2) + ' - ' + _.round(amount * price, 2);
    }
    return _.round(amount * price, 2);
  }

  getOfferPrice(item) {
    if(item.useMarketBasedPrice) {
      return _.round(this.prices[item.baseCurrencyCode + '_' + item.counterCurrencyCode], 2);
    } else {
      return _.round(Number(item.price) / 10000, 2);
    }
  }

  getMarket(item) {
    return item.baseCurrencyCode + '/' + item.counterCurrencyCode;
  }

  takeOffer(offer) {
    if(!this.checkIfValidPaymentAccount(offer)) {
      this.initModal.show({
        title: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_TITLE'),
        text: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_TEXT'),
        redirectButton: {
          text: t('OFFERS.LIST.NO_MATCHING_ACCOUNT_REDIRECT'),
          path: '/account/currency',
          class: 'large center'
        }
      });
      return;
    }

    this.router.navigateByUrl(`offers/${this.type}/take/${offer.id}`);
  }

  checkIfValidPaymentAccount(offer) {
    return this.supportedPaymentsMethods.indexOf(offer.paymentMethodId) >= 0 && this.supportedPaymentsCurrencies.indexOf(offer.currencyCode) >= 0;
  }

  private filterData() {
    if (this.data && this.type) {
      let filteredData = _.chain(this.data);
      const dir = this.type === 'sell' ? 'buy' : 'sell';
      const filter = {direction: dir.toUpperCase()};
      if (this.currencyFilter !== this.NO_FILTER) {
        _.set(filter, 'currencyCode', this.currencyFilter);
      }
      filteredData = filteredData.filter(filter);
      if (!this.settings.showMyOwnOffersInOfferBook) {
        filteredData = filteredData.filter(o=> this.myAddress !== o.ownerNodeAddress);
      }
      this.list = filteredData.value();
    }
  }
}
