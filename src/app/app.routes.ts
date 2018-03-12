import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AccountComponent} from './account/account.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},

  {path: 'sell', component: DashboardComponent},
  {path: 'buy', component: DashboardComponent},


  {path: 'portfolio', redirectTo: 'portfolio/offers', pathMatch: 'full'},
  {path: 'portfolio/offers', component: DashboardComponent},
  {path: 'portfolio/open-trades', component: DashboardComponent},
  {path: 'portfolio/history', component: DashboardComponent},

  {path: 'funds', redirectTo: 'funds/receive', pathMatch: 'full'},
  {path: 'funds/receive', component: DashboardComponent},
  {path: 'funds/send', component: DashboardComponent},
  {path: 'funds/reserved', component: DashboardComponent},
  {path: 'funds/locked', component: DashboardComponent},
  {path: 'funds/transactions', component: DashboardComponent},

  {path: 'account', redirectTo: 'account/currency', pathMatch: 'full'},
  {path: 'account/:type', component: AccountComponent},

  {path: 'settings', component: DashboardComponent},
  {path: 'network', component: DashboardComponent},
  {path: 'about', component: DashboardComponent},
];

export default appRoutes;
