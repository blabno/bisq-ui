import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import {Clipboard} from '@ionic-native/clipboard';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import appRoutes from './app.routes';

import {AboutComponent} from './settings/about/about.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {AppComponent} from './app.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';
import {BackendUrlComponent} from './settings/backendUrl/backendUrl.component';
import {BackupComponent} from './account/backup/backup.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {FormComponent} from './shared/form/form.component';
import {FundsListComponent} from './funds/list/fundsList.component';
import {HistoryComponent} from './portfolio/history/history.component';
import {InfoModalComponent} from './shared/infoModal/infoModal.component';
import {LockedComponent} from './funds/locked/locked.component';
import {MainComponent} from './main/main.component';
import {MarketComponent} from './market/market.component';
import {MenuComponent} from './menu/menu.component';
import {MessagesComponent} from "./support/messages/messages.component";
import {MyOpenOffersComponent} from './portfolio/myOpenOffers/myOpenOffers.component';
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {OffersComponent} from './offers/offers.component';
import {OffersListComponent} from './offers/offersList/offersList.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {ReceiveComponent} from './funds/receive/receive.component';
import {ReservedComponent} from './funds/reserved/reserved.component';
import {SendComponent} from './funds/send/send.component';
import {SummaryComponent} from './market/summary/summary.component';
import {SupportComponent} from "./support/support.component";
import {TakeOfferComponent} from './offers/takeOffer/takeOffer.component';
import {TradeDetailsComponent} from './portfolio/openTrades/tradeDetails/tradeDetails.component';
import {TradeListComponent} from './portfolio/openTrades/tradeList/tradeList.component';
import {TradeStatusComponent} from './portfolio/openTrades/tradeStatus/tradeStatus.component';
import {TransactionComponent} from './funds/transactions/transaction.component';
import {WalletPassComponent} from './account/wallet-pass/wallet-pass.component';
import {WalletSeedComponent} from './account/wallet-seed/wallet-seed.component';

const loadModules = [
  AboutComponent,
  AltcoinsComponent,
  AppComponent,
  ArbitratorComponent,
  BackendUrlComponent,
  BackupComponent,
  CreateOffersComponent,
  CurrencyComponent,
  FormComponent,
  FundsListComponent,
  HistoryComponent,
  InfoModalComponent,
  LockedComponent,
  MainComponent,
  MarketComponent,
  MenuComponent,
  MessagesComponent,
  MyOpenOffersComponent,
  NetworkInfoComponent,
  OffersComponent,
  OffersListComponent,
  PreferencesComponent,
  ReceiveComponent,
  ReservedComponent,
  SendComponent,
  SummaryComponent,
  SupportComponent,
  TakeOfferComponent,
  TradeDetailsComponent,
  TradeListComponent,
  TradeStatusComponent,
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
    }),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: loadModules,
  providers: [
    Clipboard,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
