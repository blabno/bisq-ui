import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CurrenciesDAO} from '../../shared/DAO/currencies.dao';
import _ from 'lodash';
@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html'
})
export class PreferencesComponent {
  public conf = {};
  public baseCurrency = ['Bitcoin', 'Litecoin', 'Dash'];
  public selectedBaseCurrency = this.baseCurrency[0];
  public languagesNames = {pl: 'Polski', en: 'English'};
  public countries = ['Poland', 'Germany', 'Russia'];
  public selectedCountry = this.countries[0];
  public bitcoinExplorers = ['Bitaps'];
  public selectedBitcoinExplorer = this.bitcoinExplorers[0];
  public widthdrawalTransactionFee = 20;
  public widthdrawalTransactionFeeDisabled = true;
  public maxDeviationFromMarketPrice = 30;
  public autoSelectArbitrators = true;
  public showMyOwnOffersInOfferBook = true;
  public useAnimations = false;
  public sortMarkersLists = true;
  public ignorePeers = '';
  public preferedCurrency = this.baseCurrency[0];
  public natonalCurrencies = [];
  public displayNatonalCurrencies = [];
  public altcoins = [];
  public displayAltcoins = [];
  public selectedNationalCurrencies = [];
  public selectedCryptoCurrencies = []
  public cryptoCurrencies = [];
  public nationalCurrencies = [];
  constructor(public translate: TranslateService, public currenciesDAO : CurrenciesDAO) {
    currenciesDAO.query().then(res => {
      const currencies = _.get(res, 'currencies') || [];
      this.cryptoCurrencies = _.filter(currencies, {type : 'crypto'});
      this.nationalCurrencies = _.filter(currencies, {type : 'fiat'});
    });
  }
  langChange(e) {
    this.translate.use(e);
  }
}
