import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import appRoutes from './app.routes';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MenuComponent} from './menu/menu.component';
import {MarketComponent} from './market/market.component';
import {SummaryComponent} from './market/summary/summary.component';
import {AccountComponent} from './account/account.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';
import {WalletPassComponent} from './account/wallet-pass/wallet-pass.component';
import {WalletSeedComponent} from './account/wallet-seed/wallet-seed.component';
import {BackupComponent} from './account/backup/backup.component';
import {SettingsComponent} from './settings/settings.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {AboutComponent} from './settings/about/about.component';
import {FormComponent} from "./shared/form/form.component";

const loadModules = [
  AppComponent,
  MainComponent,
  MenuComponent,
  MarketComponent,
  SummaryComponent,
  AccountComponent,
  CurrencyComponent,
  AltcoinsComponent,
  ArbitratorComponent,
  WalletPassComponent,
  WalletSeedComponent,
  BackupComponent,
  SettingsComponent,
  PreferencesComponent,
  NetworkInfoComponent,
  AboutComponent,
  FormComponent
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: loadModules,
  imports: [
    BrowserModule,
    FormsModule,
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
export class AppModule {
}
