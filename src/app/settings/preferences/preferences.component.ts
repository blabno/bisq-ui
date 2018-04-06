import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CurrenciesDAO} from '../../shared/DAO/currencies.dao';
import _ from 'lodash';
import {SettingsService} from '../../shared/services/settings.service';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';
@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html'
})

export class PreferencesComponent implements OnInit, OnDestroy {
  public languagesNames = {pl: 'Polski', en: 'English'};
  public widthdrawalTransactionFeeEnabled = false;
  public cryptoCurrencies = [];
  public nationalCurrencies = [];
  public currencies = [];

  constructor(private translate: TranslateService, private currenciesDAO: CurrenciesDAO, public settings: SettingsService, private toast: ToastService) {
  }

  ngOnInit() {
    this.currenciesDAO.query().then(res => {
      this.currencies = _.get(res, 'currencies') || [];
      this.cryptoCurrencies = _.filter(this.currencies, {type: 'crypto'});
      this.nationalCurrencies = _.filter(this.currencies, {type: 'fiat'});
    });
  }

  ngOnDestroy() {
  }

  langChange(e) {
    this.translate.use(e);
    this.settings.language = e;
    this.settings.saveSettings();
  }

  resetAllHiddenModalsPreferences() {
    this.settings.hiddenModals = [];
    this.settings.saveSettings();
    this.toast.show(t('SETTINGS.PREFERENCES.ALL_HIDDEN_MODALS_RESETED'), 'success');
  }
}
