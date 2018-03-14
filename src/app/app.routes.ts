import {Routes} from '@angular/router';
import {MarketComponent} from './market/market.component';
import {AccountComponent} from './account/account.component';
import {SettingsComponent} from './settings/settings.component';
import {OffersComponent} from "./offers/offers.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'market', pathMatch: 'full'},
  {path: 'market', component: MarketComponent},

  {path: 'offers/:type', component: OffersComponent},


  {path: 'portfolio', redirectTo: 'portfolio/offers', pathMatch: 'full'},
  {path: 'portfolio/offers', component: MarketComponent},
  {path: 'portfolio/open-trades', component: MarketComponent},
  {path: 'portfolio/history', component: MarketComponent},

  {path: 'funds', redirectTo: 'funds/receive', pathMatch: 'full'},
  {path: 'funds/receive', component: MarketComponent},
  {path: 'funds/send', component: MarketComponent},
  {path: 'funds/reserved', component: MarketComponent},
  {path: 'funds/locked', component: MarketComponent},
  {path: 'funds/transactions', component: MarketComponent},

  {path: 'account', redirectTo: 'account/currency', pathMatch: 'full'},
  {path: 'account/:type', component: AccountComponent},

  {path: 'settings', redirectTo: 'settings/preferences', pathMatch: 'full'},
  {path: 'settings/:type', component: SettingsComponent},

  {path: 'network', component: MarketComponent},
  {path: 'about', component: MarketComponent},
];

export default appRoutes;
