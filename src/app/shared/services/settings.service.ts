import {Injectable} from '@angular/core';
import _ from 'lodash';

enum BaseCurrencies {
  BITCOIN = 'Bitcoin',
  LITECOIN = 'Litecoin',
  DASH = 'Dash'
}

enum Countries {
  POLAND = 'Poland',
  GERMANY = 'Germany',
  RUSSIA = 'Russia'
}

enum BitcoinExplorers {
  BITAPS = 'Bitaps'
}

@Injectable()
export class SettingsService {
  public backendUrl = '';
  public baseCurrency: BaseCurrencies = BaseCurrencies.BITCOIN;
  public language = 'en';
  public country: Countries = Countries.POLAND;
  public bitcoinExplorer: BitcoinExplorers = BitcoinExplorers.BITAPS;
  public widthdrawalTransactionFee = 20;
  public maxDeviationFromMarketPrice = 30;
  public autoSelectArbitrators = true;
  public showMyOwnOffersInOfferBook = true;
  public useAnimations = false;
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
