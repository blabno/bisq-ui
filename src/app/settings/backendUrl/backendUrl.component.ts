import _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SettingsService} from '../../shared/services/settings.service';
import {NetworkDAO} from '../../shared/DAO/network.dao';
import {TradesCacheService} from '../../shared/services/tradesCache.service';
import {ToastService} from '../../shared/services/toast.service';

import t from '../../shared/defineTextToTranslate';
import {TranslateService} from "@ngx-translate/core";
import {PreferencesDAO} from "../../shared/DAO/preferences.dao";

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
              private networkDAO: NetworkDAO,
              private router: Router,
              private toast: ToastService,
              private tradesCache: TradesCacheService,
              private preferences: PreferencesDAO,
              private translate: TranslateService) {
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
    if (this.isSavingAlready) return;

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
    this.networkDAO.getP2PNetworkStatus()
      .then(() => {
        this.invalidUrl = false;
        this.toast.show(t('SETTINGS.BACKEND_URL_UPDATED'), 'success');
        this.preferences.get().then((res: any) => {
          this.translate.use(res.userLanguage);
          this.tradesCache.init();
          this.settings.saveSettings();
          this.router.navigateByUrl('/offers/buy');
          this.isSavingAlready = false;
        }).catch(_.noop);
      })
      .catch(error => {
        this.invalidUrl = true;
        this.isSavingAlready = false;
        if(401 === error.status) {
          this.toast.show(t('SETTINGS.BACKEND_URL_PROTECTED'), 'success');
        } else {
          this.toast.show(t('SETTINGS.BACKEND_URL_UNAVAILABLE'), 'error');
        }
      });
  }

  addressKeyHandler(keyCode) {
    if (keyCode === 13 && !this.isSavingAlready) {
      this.save()
    }
  }


  addUrlToSuggestions(url) {
    if (!_.includes(this.items, url)) {
      this.items.unshift(url);
    }
  }

  selectUrl(url) {
    this.settings.backendUrl = url;
  }

  selectUrlAndSave(url) {

    this.selectUrl(url);
    this.save()
  }
}
