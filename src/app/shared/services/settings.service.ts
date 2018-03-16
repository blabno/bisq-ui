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
  constructor() {
    this.loadSettings();
  }
  loadSettings() {
    var keys = Object.keys(this);
    _.forEach(keys, value => {
      this[value] = localStorage.getItem(value);
    });
  }
  saveSettings() {
    var keys = Object.keys(this);
    _.forEach(keys, value => {
      localStorage.setItem(value, this[value]);
    });
  }
}
