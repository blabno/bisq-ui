import {Injectable} from '@angular/core';

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
  public baseCurrencyTypes = BaseCurrencies;
  public baseCurrencyValues = (<any>Object).values(BaseCurrencies);
  public country: Countries = Countries.POLAND;
  public countryTypes = Countries;
  public countryValues = (<any>Object).values(Countries);
  public bitcoinExplorer: BitcoinExplorers = BitcoinExplorers.BITAPS;
  public bitcoinExplorerTypes = BitcoinExplorers;
  public bitcoinExplorerValues = (<any>Object).values(BitcoinExplorers);
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
  constructor() {}
}
