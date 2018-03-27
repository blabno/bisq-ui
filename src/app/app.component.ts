import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainComponent} from './main/main.component';
import {TranslateService} from '@ngx-translate/core';
import {ClipboardService} from './shared/services/clipboard.service';

import {ArbitratorsDAO} from './shared/DAO/arbitrators.dao';
import {CurrenciesDAO} from './shared/DAO/currencies.dao';
import {InfoModalService} from './shared/infoModal/infoModal.service';
import {MarketPrizeService} from './shared/services/marketPrize.service';
import {OffersDAO} from './shared/DAO/offers.dao';
import {P2pDAO} from './shared/DAO/p2p.dao';
import {PaymentAccountsDAO} from './shared/DAO/paymentAccounts.dao';
import {SettingsService} from './shared/services/settings.service';
import {ToastService} from './shared/services/toast.service';
import {TradesCacheService} from './shared/services/tradesCache.service';
import {TradesDAO} from './shared/DAO/trades.dao';
import {WalletDAO} from './shared/DAO/wallet.dao';

import t from './shared/defineTextToTranslate';

t('WARNING');

@Component({
  templateUrl: 'app.html',
  providers: [
    ArbitratorsDAO,
    CurrenciesDAO,
    InfoModalService,
    MarketPrizeService,
    OffersDAO,
    P2pDAO,
    PaymentAccountsDAO,
    SettingsService,
    ToastService,
    TradesCacheService,
    TradesDAO,
    WalletDAO,
    ClipboardService
  ]
})
export class AppComponent {
  rootPage: any = MainComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService, private settings: SettingsService, private tradesCache: TradesCacheService) {
    translate.setDefaultLang('en');
    translate.use(settings.language);
    translate.addLangs(['pl', 'en']);
    tradesCache.init();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
