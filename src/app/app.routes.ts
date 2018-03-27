import {Routes} from '@angular/router';
import {MarketComponent} from './market/market.component';
import {OffersComponent} from './offers/offers.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {TakeOfferComponent} from './offers/takeOffer/takeOffer.component';
import {ReceiveComponent} from './funds/receive/receive.component';
import {SendComponent} from './funds/send/send.component';
import {ReservedComponent} from './funds/reserved/reserved.component';
import {LockedComponent} from './funds/locked/locked.component';
import {TransactionComponent} from './funds/transactions/transaction.component';
import {MyOpenOffersComponent} from './portfolio/myOpenOffers/myOpenOffers.component';
import {OpenTradesComponent} from './portfolio/openTrades/openTrades.component';
import {HistoryComponent} from './portfolio/history/history.component';
import {PreferencesComponent} from './settings/preferences/preferences.component';
import {NetworkInfoComponent} from './settings/network-info/network-info.component';
import {AboutComponent} from './settings/about/about.component';
import {CurrencyComponent} from './account/currency/currency.component';
import {AltcoinsComponent} from './account/altcoins/altcoins.component';
import {ArbitratorComponent} from './account/arbitrator/arbitrator.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'offers/buy', pathMatch: 'full'},
  {path: 'market', component: MarketComponent},

  {path: 'offers/:type/create', component: CreateOffersComponent},
  {path: 'offers/:type/take/:offerId', component: TakeOfferComponent},
  {path: 'offers/:type', component: OffersComponent},

  {path: 'portfolio', redirectTo: 'portfolio/my-open-offers', pathMatch: 'full'},
  {path: 'portfolio/my-open-offers', component: MyOpenOffersComponent},
  {path: 'portfolio/open-trades', component: OpenTradesComponent},
  {path: 'portfolio/history', component: HistoryComponent},

  {path: 'funds', redirectTo: 'funds/receive', pathMatch: 'full'},
  {path: 'funds/receive', component: ReceiveComponent},
  {path: 'funds/send', component: SendComponent},
  {path: 'funds/reserved', component: ReservedComponent},
  {path: 'funds/locked', component: LockedComponent},
  {path: 'funds/transaction', component: TransactionComponent},

  {path: 'account', redirectTo: 'account/currency', pathMatch: 'full'},
  {path: 'account/currency', component: CurrencyComponent},
  {path: 'account/altcoins', component: AltcoinsComponent},
  {path: 'account/arbitrator', component: ArbitratorComponent},

  {path: 'settings', redirectTo: 'settings/preferences', pathMatch: 'full'},
  {path: 'settings/preferences', component: PreferencesComponent},
  {path: 'settings/network-info', component: NetworkInfoComponent},
  {path: 'settings/about', component: AboutComponent},

  {path: 'network', component: MarketComponent},
  {path: 'about', component: MarketComponent},
];

export default appRoutes;
