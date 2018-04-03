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
    'http://alice.mainnet.bisq-api.labnoratory.com',
    'http://alice.regtest.bisq-api.labnoratory.com',
    'http://bob.regtest.bisq-api.labnoratory.com',
    'http://localhost:8080'
  ];
  invalidUrl = false;
  isSavingAlready = false;

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
    if(this.isSavingAlready) return;

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
    this.isSavingAlready = true;
    this.p2pDAO.status()
      .then(() => {
        this.invalidUrl = false;
        this.toast.show(t('SETTINGS.BACKEND_URL_UPDATED'), 'success');
        this.router.navigateByUrl('/offers/buy');
        this.isSavingAlready = false;
      })
      .catch(() => {
        this.invalidUrl = true;
        this.toast.show(t('SETTINGS.BACKEND_URL_UNAVAILABLE'), 'error');
        this.isSavingAlready = false;
      });
    this.settings.saveSettings();
  }

  addressKeyHandler(keyCode) {
    if(keyCode === 13 && !this.isSavingAlready) {
      this.save()
    }
  }

  selectUrl(url) {
    this.settings.backendUrl = url;
  }
}
