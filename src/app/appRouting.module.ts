import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarketComponent} from './market/market.component';
import {SpreadComponent} from './market/spread/spread.component';
import {OffersComponent} from './offers/offers.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {TakeOfferComponent} from './offers/takeOffer/takeOffer.component';
import {ReceiveComponent} from './funds/receive/receive.component';
import {SendComponent} from './funds/send/send.component';
import {ReservedComponent} from './funds/reserved/reserved.component';
import {LockedComponent} from './funds/locked/locked.component';
import {TransactionComponent} from './funds/transactions/transaction.component';
import {TradeListComponent} from './portfolio/tradeList/tradeList.component';
import {TradeDetailsComponent} from './portfolio/openTrades/tradeDetails/tradeDetails.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {AboutComponent} from './settings/about/about.component';
import {BackendUrlComponent} from './settings/backendUrl/backendUrl.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';
import {SupportComponent} from './support/support.component';
import {MessagesComponent} from './support/messages/messages.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'offers/buy', pathMatch: 'full'},
  {path: 'market/offers-book', component: MarketComponent},
  {path: 'market/spread', component: SpreadComponent},
  {path: 'market/trades', component: MarketComponent},

  {path: 'offers/:type/create', component: CreateOffersComponent},
  {path: 'offers/:type/take/:offerId', component: TakeOfferComponent},
  {path: 'offers/:type', component: OffersComponent},

  {path: 'portfolio', redirectTo: 'portfolio/my-open-offers', pathMatch: 'full'},
  {path: 'portfolio/open-trades', component: TradeListComponent},
  {path: 'portfolio/open-trades/:id', component: TradeDetailsComponent},
  {path: 'portfolio/history', component: TradeListComponent},

  {path: 'funds', redirectTo: 'funds/receive', pathMatch: 'full'},
  {path: 'funds/receive', component: ReceiveComponent},
  {path: 'funds/send', component: SendComponent},
  {path: 'funds/reserved', component: ReservedComponent},
  {path: 'funds/locked', component: LockedComponent},
  {path: 'funds/transaction', component: TransactionComponent},

  {path: 'support', component: SupportComponent},
  {path: 'support/:id', component: MessagesComponent},

  {path: 'account', redirectTo: 'account/currency', pathMatch: 'full'},
  {path: 'account/currency', component: CurrencyComponent},
  {path: 'account/altcoins', component: AltcoinsComponent},
  {path: 'account/arbitrator', component: ArbitratorComponent},

  {path: 'settings', redirectTo: 'settings/preferences', pathMatch: 'full'},
  {path: 'settings/preferences', component: PreferencesComponent},
  {path: 'settings/network-info', component: NetworkInfoComponent},
  {path: 'settings/about', component: AboutComponent},
  {path: 'settings/backend-url', component: BackendUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
