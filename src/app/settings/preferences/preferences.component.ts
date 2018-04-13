import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CurrenciesDAO} from '../../shared/DAO/currencies.dao';
import _ from 'lodash';
import {SettingsService} from '../../shared/services/settings.service';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';
import {PreferencesDAO} from '../../shared/DAO/preferences.dao';
@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html'
})

export class PreferencesComponent implements OnInit {
  public savingSettings = false;
  public languagesNames = {pl: 'Polski', en: 'English'};
  public widthdrawalTransactionFeeEnabled = false;
  public cryptoCurrencies = [];
  public nationalCurrencies = [];
  public currencies = [];
  public blockChainExplorers = [];
  public availablecryptoCurrencies = [];
  public availableFiatCurrencies = [];
  public userCountries = [];
  public luzna = ['ACH'];
  public settingsModel = {
    "autoSelectArbitrators": true,
    "baseCurrencyNetwork": "BTC",
    "blockChainExplorer": "Blockcypher",
    "cryptoCurrencies": ['ACH'],
    "fiatCurrencies": [],
    "ignoredTraders": [],
    "maxPriceDistance": 0.3,
    "preferredTradeCurrency": "USD",
    "useCustomWithdrawalTxFee": false,
    "userCountry": "US",
    "userLanguage": "en",
    "withdrawalTxFee": 100
  }

  constructor(private translate: TranslateService, private currenciesDAO: CurrenciesDAO, private toast: ToastService, private preferencesDAO: PreferencesDAO, private settings: SettingsService) {
  }

  ngOnInit() {
    this.currenciesDAO.query().then(res => {
      this.currencies = _.get(res, 'currencies') || [];
      this.cryptoCurrencies = _.filter(this.currencies, {type: 'crypto'});
      this.nationalCurrencies = _.filter(this.currencies, {type: 'fiat'});
      return this.preferencesDAO.getAvailableValues();
    }).then((res: any) => {
      this.blockChainExplorers = res.blockChainExplorers || [];
      this.availablecryptoCurrencies  = res.cryptoCurrencies || [];
      this.availableFiatCurrencies = res.fiatCurrencies || [];
      this.userCountries = res.userCountries || [];
      return this.preferencesDAO.get();
    }).then((res: any) => {
      this.settingsModel = res;
    });
  }

  saveSettings() {
    if(this.savingSettings) return;
    this.savingSettings = true;
    this.preferencesDAO.set(this.settingsModel).then( res => {
      _.merge(this.settingsModel, res);
      this.savingSettings = false;
      this.toast.show(t('SETTINGS.PREFERENCES.SETTINGS_SAVED'), 'success');
    }).catch(err => {
      this.savingSettings = false;
      this.toast.show(_.get(err, 'error.errors[0]') || t('SETTINGS.PREFERENCES.ERROR_WHILE_SAVING'), 'error');
    }); 
  }

  langChange(e) {
    this.translate.use(e);
    this.settingsModel.userLanguage = e;
  }

  resetAllHiddenModalsPreferences() {
    this.settings.hiddenModals = [];
    this.settings.saveSettings();
    this.toast.show(t('SETTINGS.PREFERENCES.ALL_HIDDEN_MODALS_RESETED'), 'success');
  }
}
