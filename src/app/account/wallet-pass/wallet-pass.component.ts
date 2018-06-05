import {Component} from '@angular/core';

import {UserDAO} from '../../shared/DAO/user.dao';
import {SettingsService} from '../../shared/services/settings.service';
import {ToastService} from '../../shared/services/toast.service';

import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-wallet-pass',
  templateUrl: 'wallet-pass.component.html'
})
export class WalletPassComponent {

  password: string = '';
  confirmedPassword: string = '';

  constructor(private userDAO: UserDAO, private settings: SettingsService, private toast: ToastService) {

  }

  isPasswordSet() {
    return this.settings.isAuthorizationRequired || !!this.settings.authorizationHeader;
  }

  setPassword() {
    if(!this.password) {
      return this.toast.error(null, t('ACCOUNT.WALLET_PASS.EMPTY_PASSWORD'));
    }
    if(this.password !== this.confirmedPassword) {
      return this.toast.error(null, t('ACCOUNT.WALLET_PASS.DIFFERENT_PASSWORDS'));
    }
    this.userDAO.setPassword('', this.password)
      .then((result: any) => {
        this.settings.isAuthorizationRequired = true;
        this.settings.authorizationHeader = result.token;
        this.settings.saveSettings();
        this.toast.show(t('ACCOUNT.WALLET_PASS.SET_SUCCESS'), 'success');
      })
      .catch(error => this.toast.error(error));
  }

  removePassword() {
    if(this.password !== this.confirmedPassword) {
      return this.toast.error(null, t('ACCOUNT.WALLET_PASS.DIFFERENT_PASSWORDS'));
    }
    this.userDAO.setPassword(this.password, '')
      .then(() => {
        this.settings.isAuthorizationRequired = false;
        this.settings.authorizationHeader = '';
        this.settings.saveSettings();
        this.toast.show(t('ACCOUNT.WALLET_PASS.REMOVE_SUCCESS'), 'success')
      })
      .catch(error => this.toast.error(error));
  }
}
