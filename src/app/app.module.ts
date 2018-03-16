import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import appRoutes from './app.routes';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AboutComponent} from './settings/about/about.component';
import {AccountComponent} from './account/account.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {AppComponent} from './app.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';
import {BackupComponent} from './account/backup/backup.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {FormComponent} from './shared/form/form.component';
import {FundsComponent} from './funds/funds.component';
import {HistoryComponent} from './portfolio/history/history.component';
import {LockedComponent} from './funds/locked/locked.component';
import {MainComponent} from './main/main.component';
import {MarketComponent} from './market/market.component';
import {MenuComponent} from './menu/menu.component';
import {MyOpenOffersComponent} from './portfolio/myOpenOffers/myOpenOffers.component';
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {OffersComponent} from './offers/offers.component';
import {OffersListComponent} from './offers/offersList/offersList.component';
import {OpenTradesComponent} from './portfolio/openTrades/openTrades.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {ReceiveComponent} from './funds/receive/receive.component';
import {ReservedComponent} from './funds/reserved/reserved.component';
import {SendComponent} from './funds/send/send.component';
import {SettingsComponent} from './settings/settings.component';
import {SummaryComponent} from './market/summary/summary.component';
import {TransactionComponent} from './funds/transactions/transaction.component';
import {WalletPassComponent} from './account/wallet-pass/wallet-pass.component';
import {WalletSeedComponent} from './account/wallet-seed/wallet-seed.component';


const loadModules = [
  AboutComponent,
  AccountComponent,
  AltcoinsComponent,
  AppComponent,
  ArbitratorComponent,
  BackupComponent,
  CreateOffersComponent,
  CurrencyComponent,
  FormComponent,
  FundsComponent,
  HistoryComponent,
  LockedComponent,
  MainComponent,
  MarketComponent,
  MenuComponent,
  MyOpenOffersComponent,
  NetworkInfoComponent,
  OffersComponent,
  OffersListComponent,
  OpenTradesComponent,
  PortfolioComponent,
  PreferencesComponent,
  ReceiveComponent,
  ReservedComponent,
  SendComponent,
  SettingsComponent,
  SummaryComponent,
  TransactionComponent,
  WalletPassComponent,
  WalletSeedComponent
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: loadModules,
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(AppComponent),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: loadModules,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
