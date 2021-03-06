import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../shared/services/settings.service';
import {ArbitratorsDAO} from '../../shared/DAO/arbitrators.dao';
import _ from 'lodash';
import {ToastService} from '../../shared/services/toast.service';
import langsJson from '../../../assets/data/langs';
import {PreferencesDAO} from '../../shared/DAO/preferences.dao';
import t from '../../shared/defineTextToTranslate';
@Component({
  selector: 'app-arbitrator',
  templateUrl: 'arbitrator.component.html'
})
export class ArbitratorComponent implements OnInit {
  public languages = [
    {value: 'pl', name: 'Polish'},
    {value: 'en', name: 'English'}
  ];
  public arbitrators = [];
  public arbitratorsSelection = {};
  public selectedArbitratorsAddresses = [];
  public nominatingInProgress;
  public loading;
  public languagesSpoken;
  public doingActionOn = {};
  public settingsModel = {
    autoSelectArbitrators: false
  };
  public savingSettings = false;

  constructor(public settings: SettingsService, private arbitratorsDAO: ArbitratorsDAO, private toast: ToastService, private preferencesDAO: PreferencesDAO) {
    this.languagesSpoken = (this.settings.languagesSpoken.length && this.settings.languagesSpoken) || ['en'];
  }

  ngOnInit() {
    this.languages = _.map(langsJson, (lang, key) => {
      return {value: key, name: lang.nativeName};
    });
    this.getArbitrators();
    this.preferencesDAO.get()
      .then(res => {
        _.merge(this.settingsModel, res);
      })
      .catch(error => this.toast.error(error));
  }

  getArbitrators() {
    this.loading = true;
    this.arbitratorsDAO.query().then(res => {
      this.arbitrators = _.get(res, 'arbitrators') || [];
      this.arbitratorsSelection = _.chain(_.get(res, 'arbitrators')).mapKeys('address').mapValues(() => false).value();
      return this.arbitratorsDAO.query(true);
    })
      .then(res => {
        this.arbitratorsSelection = _.chain(_.get(res, 'arbitrators')).mapKeys('address').mapValues(() => true).value();
        this.loading = false;
      })
      .catch(error => this.toast.error(error));
  }

  onSelectionChange(event, address) {
    this.doingActionOn[address] = true;
    const enableElement = () => {
      delete this.doingActionOn[address];
    };
    const errorHandle = error => {
      this.toast.error(error);
      this.arbitratorsSelection[address] = !event.checked;
    };
    if (event.checked) {
      this.arbitratorsDAO.select(address).catch(errorHandle).then(enableElement);
    } else {
      this.arbitratorsDAO.deselect(address).catch(errorHandle).then(enableElement);
    }
  }

  checkIfAddressIsSelected(address) {
    return this.selectedArbitratorsAddresses.indexOf(address) >= 0;
  }

  saveLanguagesSettings() {
    this.settings.languagesSpoken = this.languagesSpoken;
    this.settings.saveSettings()
  }

  nominateYourself() {
    this.nominatingInProgress = true;
    this.arbitratorsDAO.registerYourself(this.languagesSpoken)
      .then(() => {
        this.getArbitrators();
        this.nominatingInProgress = false;
        this.toast.show('TOAST.NOMINATED_SUCCESSFULLY', 'success');
      })
      .catch(error => this.toast.error(error));
  }

  saveSettings() {
    if(this.savingSettings) return;
    this.savingSettings = true;
    this.preferencesDAO.set(this.settingsModel).then( res => {
      _.merge(this.settingsModel, res);
      this.savingSettings = false;
      this.toast.show(t('ACCOUNT.ARBITRATOR.AUTO_SELECT_ARBITRATORS_SAVED'), 'success');
    }).catch(err => {
      this.savingSettings = false;
      this.toast.show(_.get(err, 'error.errors[0]') || t('ACCOUNT.ARBITRATOR.AUTO_SELECT_ARBITRATORS_ERROR'), 'error');
    });
  }
}
