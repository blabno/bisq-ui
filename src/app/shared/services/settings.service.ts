import {Injectable} from '@angular/core';
import _ from 'lodash';

enum BaseCurrencies {
  BITCOIN = 'Bitcoin',
  LITECOIN = 'Litecoin',
  DASH = 'Dash'
}

enum Countries {
  PL = 'Poland',
  GER = 'Germany',
  RU = 'Russia'
}

enum BitcoinExplorers {
  BITAPS = 'Bitaps'
}

@Injectable()
export class SettingsService {
  public isAuthorizationRequired = false;
  public authorizationHeader = '';
  public backendSettings = {};
  public awsAccessKeyId = '';
  public awsCreateInitDate = 0;
  public awsStartInitDate = 0;
  public awsSecretAccessKey = '';
  public backendUrl = '';
  public backendEC2InstanceId = '';
  public backendEC2InstanceIP = '';
  public baseCurrency: BaseCurrencies = BaseCurrencies.BITCOIN;
  public language = 'en';
  public country: Countries = Countries.PL;
  public bitcoinExplorer: BitcoinExplorers = BitcoinExplorers.BITAPS;
  public widthdrawalTransactionFee = 20;
  public maxDeviationFromMarketPrice = 30;
  public autoSelectArbitrators = true;
  public showMyOwnOffersInOfferBook = true;
  public sortMarkersLists = true;
  public ignoredPeers = '';
  public preferedCurrency = 'BTC';
  public displayedNatonalCurrencies = [];
  public displayedAltcoins = [];
  public languagesSpoken = ['en'];
  public autoSelectArbitratorsWithMatchingLanguage = true;
  // OFFERS LIST
  public selectedCurrencyOnOfferList = ['ALL'];
  public selectedPaymentMethodOnOfferList = 'ALL';
  // HIDDEN MODALS
  public hiddenModals = [];

  constructor() {
    this.loadSettings();
  }

  get baseCurrencyTypes() {
    return BaseCurrencies;
  }

  get baseCurrencyValues() {
    return (<any>Object).values(BaseCurrencies);
  }

  get countryTypes() {
    return Countries;
  }

  get countryValues() {
    return (<any>Object).values(Countries);
  }

  get bitcoinExplorerTypes() {
    return BitcoinExplorers;
  }

  get bitcoinExplorerValues() {
    return (<any>Object).values(BitcoinExplorers);
  }

  loadSettings() {
    const keys = Object.keys(this);
    _.forEach(keys, key => {
      const storageValue = localStorage.getItem(key);
      if (this[key] instanceof Array && storageValue) {
        this[key] = storageValue.split(',') || this[key];
      } else if ('number' === typeof this[key]) {
        this[key] = Number(storageValue) || this[key];
      }  else if ('boolean' === typeof this[key]) {
        this[key] = 'true' === this[key];
      } else {
        this[key] = storageValue || this[key];
      }
    });
  }

  saveSettings() {
    const keys = Object.keys(this);
    _.forEach(keys, key => {
      localStorage.setItem(key, this[key]);
    });
  }
}
