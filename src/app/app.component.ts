import _ from 'lodash';
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';

import {MainComponent} from './main/main.component';

import {AppDAO} from './shared/DAO/app.dao';
import {ArbitratorsDAO} from './shared/DAO/arbitrators.dao';
import {BackupsDAO} from './shared/DAO/backups.dao';
import {CurrenciesDAO} from './shared/DAO/currencies.dao';
import {MarketDAO} from './shared/DAO/market.dao';
import {NetworkDAO} from './shared/DAO/network.dao';
import {OffersDAO} from './shared/DAO/offers.dao';
import {PaymentAccountsDAO} from './shared/DAO/paymentAccounts.dao';
import {PreferencesDAO} from './shared/DAO/preferences.dao';
import {SupportDAO} from './shared/DAO/support.dao';
import {TradesDAO} from './shared/DAO/trades.dao';
import {UserDAO} from './shared/DAO/user.dao';
import {WalletDAO} from './shared/DAO/wallet.dao';

import {AwsApiService} from './settings/backendUrl/awsApi.service';
import {BackButtonService} from './shared/services/backButton.service';
import {ClipboardService} from './shared/services/clipboard.service';
import {InfoModalService} from './shared/components/infoModal/infoModal.service';
import {InfoAlertService} from './shared/components/infoAlert/infoAlert.service';
import {MarketPriceService} from './shared/services/marketPrice.service';
import {SettingsService} from './shared/services/settings.service';
import {ToastService} from './shared/services/toast.service';
import {TradesCacheService} from './shared/services/tradesCache.service';

import t from './shared/defineTextToTranslate';

t('WARNING');

@Component({
  templateUrl: 'app.html',
  providers: [
    AppDAO,
    ArbitratorsDAO,
    CurrenciesDAO,
    MarketDAO,
    OffersDAO,
    PaymentAccountsDAO,
    SupportDAO,
    TradesDAO,
    UserDAO,
    WalletDAO,
    AwsApiService,
    BackButtonService,
    ClipboardService,
    InfoModalService,
    MarketPriceService,
    ToastService,
    TradesCacheService,
    PreferencesDAO,
    NetworkDAO,
    BackupsDAO,
    InfoAlertService
  ]
})
export class AppComponent {
  rootPage: any = MainComponent;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private infoModal: InfoModalService,
              private settings: SettingsService,
              private tradesCache: TradesCacheService,
              private translate: TranslateService,
              private preferences: PreferencesDAO,
              private backButton: BackButtonService) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['pl', 'en']);
    if (!this.settings.backendUrl) {
      this.infoModal.show({
        title: t('SETTINGS.BACKEND_URL_MISSING_TITLE'),
        text: t('SETTINGS.BACKEND_URL_MISSING_TEXT'),
        redirectButton: {
          text: t('SETTINGS.BACKEND_URL_MISSING_REDIRECT'),
          path: '/settings/backend-url',
          class: 'center'
        },
        disallowCancel: true
      });
    }
    else {
      this.tradesCache.init();
      this.preferences.get().then((res: any) => {
        this.translate.use(res.userLanguage);
      }).catch(_.noop);
    }

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.backButton.init();
    });
  }
}
