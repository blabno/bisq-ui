import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';

import {MainComponent} from './main/main.component';

import {ArbitratorsDAO} from './shared/DAO/arbitrators.dao';
import {CurrenciesDAO} from './shared/DAO/currencies.dao';
import {OffersDAO} from './shared/DAO/offers.dao';
import {P2pDAO} from './shared/DAO/p2p.dao';
import {PaymentAccountsDAO} from './shared/DAO/paymentAccounts.dao';
import {SupportDAO} from "./shared/DAO/support.dao";
import {TradesDAO} from './shared/DAO/trades.dao';
import {WalletDAO} from './shared/DAO/wallet.dao';

import {ClipboardService} from './shared/services/clipboard.service';
import {InfoModalService} from './shared/infoModal/infoModal.service';
import {MarketPrizeService} from './shared/services/marketPrize.service';
import {SettingsService} from './shared/services/settings.service';
import {ToastService} from './shared/services/toast.service';
import {TradesCacheService} from './shared/services/tradesCache.service';

import t from './shared/defineTextToTranslate';

t('WARNING');

@Component({
  templateUrl: 'app.html',
  providers: [
    ArbitratorsDAO,
    CurrenciesDAO,
    OffersDAO,
    P2pDAO,
    PaymentAccountsDAO,
    SupportDAO,
    TradesDAO,
    WalletDAO,
    ClipboardService,
    InfoModalService,
    MarketPrizeService,
    SettingsService,
    ToastService,
    TradesCacheService
  ]
})
export class AppComponent {
  rootPage: any = MainComponent;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private initModal: InfoModalService,
              private settings: SettingsService,
              private tradesCache: TradesCacheService,
              private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(settings.language);
    this.translate.addLangs(['pl', 'en']);
    this.tradesCache.init();
    if (!this.settings.backendUrl) {
      this.initModal.show({
        title: t('SETTINGS.BACKEND_URL_MISSING_TITLE'),
        text: t('SETTINGS.BACKEND_URL_MISSING_TEXT'),
        redirectButton: {
          text: t('SETTINGS.BACKEND_URL_MISSING_REDIRECT'),
          path: '/settings/backend-url',
          class: 'large center'
        },
        disallowCancel: true
      });
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
