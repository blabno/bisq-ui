import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SettingsService} from '../../shared/services/settings.service';
import {P2pDAO} from '../../shared/DAO/p2p.dao';
import {TradesCacheService} from '../../shared/services/tradesCache.service';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-backend-url',
  templateUrl: 'backendUrl.component.html'
})
export class BackendUrlComponent implements OnInit, OnDestroy {
  items = [
    'http://alice.regtest.bisq-api.labnoratory.com',
    'http://bob.regtest.bisq-api.labnoratory.com',
    'http://localhost:8080'
  ];
  invalidUrl = false;

  constructor(public settings: SettingsService,
              private p2pDAO: P2pDAO,
              private router: Router,
              private toast: ToastService,
              private tradesCache: TradesCacheService) {
  }

  ngOnInit() {
    this.tradesCache.stop();
  }

  ngOnDestroy() {
    this.tradesCache.init();
  }

  change() {
    this.invalidUrl = false;
  }

  save() {
    if (!this.settings.backendUrl) {
      this.invalidUrl = true;
      this.toast.show(t('SETTINGS.BACKEND_URL_REQUIRED'), 'error');
      return;
    }
    if (!/^(https?:\/\/)/.test(this.settings.backendUrl)) {
      this.invalidUrl = true;
      this.toast.show(t('SETTINGS.BACKEND_URL_WRONG_FORMAT'), 'error');
      return;
    }
    this.p2pDAO.status()
      .then(() => {
        this.invalidUrl = false;
        this.toast.show(t('SETTINGS.BACKEND_URL_UPDATED'), 'success');
        this.router.navigateByUrl('/offers/buy');
      })
      .catch(() => {
        this.invalidUrl = true;
        this.toast.show(t('SETTINGS.BACKEND_URL_UNAVAILABLE'), 'error');
      });
    this.settings.saveSettings();
  }

  selectUrl(url) {
    this.settings.backendUrl = url;
  }
}
