import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {SettingsService} from '../shared/services/settings.service';
import {ToastService} from '../shared/services/toast.service';

import t from '../shared/defineTextToTranslate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @ViewChild('navbarToggler') navbarToggler;

  constructor(private router: Router, private settings: SettingsService, private toast: ToastService) {
  }

  logout() {
    this.settings.authorizationHeader = '';
    this.settings.saveSettings();
    this.toast.show(t('MENU.LOGGED_OUT'), 'success');
    this.router.navigateByUrl('/login');
    this.onMenuItemClick();
  }

  isMenuVisible() {
    return !this.settings.isAuthorizationRequired || !!this.settings.authorizationHeader;
  }

  isAuthenticated() {
    return !!this.settings.authorizationHeader;
  }

  onMenuItemClick() {
    if (992 > window.innerWidth) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
