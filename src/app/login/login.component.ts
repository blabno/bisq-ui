import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserDAO} from '../shared/DAO/user.dao';
import {ToastService} from '../shared/services/toast.service';
import {SettingsService} from '../shared/services/settings.service';

import t from '../shared/defineTextToTranslate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  password: string = '';

  constructor(private userDAO: UserDAO,
              private toast: ToastService,
              private router: Router,
              private settings: SettingsService) {
  }

  authenticate() {
    this.userDAO.authenticate(this.password)
      .then((result: any) => {
        this.settings.isAuthorizationRequired = true;
        this.settings.authorizationHeader = result.token;
        this.settings.saveSettings();
        this.toast.show(t('LOGIN.SUCCESS'), 'success');
        this.router.navigateByUrl('/');
      })
      .catch(error => this.toast.error(error, t('LOGIN.ERROR')));
  }
}
