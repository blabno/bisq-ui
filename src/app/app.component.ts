import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainComponent} from './main/main.component';
import {TranslateService} from '@ngx-translate/core';
import {PaymentAccountsDAO} from './shared/DAO/paymentAccounts.dao';
import {CurrenciesDAO} from './shared/DAO/currencies.dao';
import {ToastService} from './shared/services/toast.service';
import {OffersDAO} from "./shared/DAO/offers.dao";
import {TradesDAO} from "./shared/DAO/trades.dao";
import {SettingsService} from './shared/services/settings.service';
import {ArbitratorsDAO} from './shared/DAO/arbitrators.dao'

@Component({
  templateUrl: 'app.html',
  providers: [
    PaymentAccountsDAO,
    CurrenciesDAO,
    ToastService,
    OffersDAO,
    TradesDAO,
    SettingsService,
    ArbitratorsDAO
  ]
})
export class AppComponent {
  rootPage: any = MainComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService, public settings: SettingsService) {
    translate.setDefaultLang('en');
    translate.use(settings.language);
    translate.addLangs(['pl', 'en']);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
