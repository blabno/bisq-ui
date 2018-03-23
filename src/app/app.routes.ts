import {Routes} from '@angular/router';
import {MarketComponent} from './market/market.component';
import {AccountComponent} from './account/account.component';
import {SettingsComponent} from './settings/settings.component';
import {OffersComponent} from "./offers/offers.component";
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CreateOffersComponent} from './offers/createOffers/createOffers.component';
import {FundsComponent} from "./funds/funds.component";
import {TakeOfferComponent} from './offers/takeOffer/takeOffer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'offers/buy', pathMatch: 'full'},
  {path: 'market', component: MarketComponent},

  {path: 'offers/:type/create', component: CreateOffersComponent},
  {path: 'offers/:type/take/:offerId', component: TakeOfferComponent},
  {path: 'offers/:type', component: OffersComponent},

  {path: 'settings', redirectTo: 'settings/preferences', pathMatch: 'full'},
  {path: 'settings/:type', component: SettingsComponent},

  {path: 'portfolio', redirectTo: 'portfolio/my-open-offers', pathMatch: 'full'},
  {path: 'portfolio/:type', component: PortfolioComponent},

  {path: 'funds', redirectTo: 'funds/receive', pathMatch: 'full'},
  {path: 'funds/:type', component: FundsComponent},

  {path: 'account', redirectTo: 'account/currency', pathMatch: 'full'},
  {path: 'account/:type', component: AccountComponent},

  {path: 'settings', redirectTo: 'settings/preferences', pathMatch: 'full'},
  {path: 'settings/:type', component: SettingsComponent},

  {path: 'network', component: MarketComponent},
  {path: 'about', component: MarketComponent},
];

export default appRoutes;
