import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import {Clipboard} from '@ionic-native/clipboard';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {AboutComponent} from './settings/about/about.component';
import {AccountManagerComponent} from './account/accountManager/accountManager.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {AppComponent} from './app.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';
import {BackendUrlComponent} from './settings/backendUrl/backendUrl.component';
import {BackupComponent} from './account/backup/backup.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {FormComponent} from './shared/components/form/form.component';
import {FundsListComponent} from './funds/list/fundsList.component';
import {GravatarComponent} from './shared/components/gravatar/gravatar.component';
import {InfoModalComponent} from './shared/components/infoModal/infoModal.component';
import {LockedComponent} from './funds/locked/locked.component';
import {MainComponent} from './main/main.component';
import {MarketComponent} from './market/market.component';
import {MenuComponent} from './menu/menu.component';
import {MessagesComponent} from "./support/messages/messages.component";
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {OfferDetailsComponent} from './offers/offerDetails/offerDetails.component';
import {OffersComponent} from './offers/offers.component';
import {OffersListComponent} from './offers/offersList/offersList.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {ReceiveComponent} from './funds/receive/receive.component';
import {ReservedComponent} from './funds/reserved/reserved.component';
import {SectionHeaderComponent} from "./shared/components/sectionHeader/sectionHeader.component";
import {SendComponent} from './funds/send/send.component';
import {SpreadComponent} from './market/spread/spread.component';
import {SummaryComponent} from './market/summary/summary.component';
import {SupportComponent} from './support/support.component';
import {TakeOfferComponent} from './offers/takeOffer/takeOffer.component';
import {TradeDetailsComponent} from './portfolio/openTrades/tradeDetails/tradeDetails.component';
import {TradeListComponent} from './portfolio/tradeList/tradeList.component';
import {TradeStatusComponent} from './portfolio/openTrades/tradeStatus/tradeStatus.component';
import {TransactionComponent} from './funds/transactions/transaction.component';
import {WalletPassComponent} from './account/wallet-pass/wallet-pass.component';
import {WalletSeedComponent} from './account/wallet-seed/wallet-seed.component';
import {MoreThanZeroValidator} from './shared/validators/moreThanZero.directive';

import {AppRoutingModule} from './appRouting.module';

const loadComponents = [
  AboutComponent,
  AccountManagerComponent,
  AltcoinsComponent,
  AppComponent,
  ArbitratorComponent,
  BackendUrlComponent,
  BackupComponent,
  CreateOffersComponent,
  CurrencyComponent,
  FormComponent,
  FundsListComponent,
  GravatarComponent,
  InfoModalComponent,
  LockedComponent,
  MainComponent,
  MarketComponent,
  MenuComponent,
  MessagesComponent,
  NetworkInfoComponent,
  OfferDetailsComponent,
  OffersComponent,
  OffersListComponent,
  PreferencesComponent,
  ReceiveComponent,
  ReservedComponent,
  SectionHeaderComponent,
  SendComponent,
  SpreadComponent,
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

const directives = [
  MoreThanZeroValidator
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [...loadComponents, ...directives],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
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
  entryComponents: loadComponents,
  providers: [
    Clipboard,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
