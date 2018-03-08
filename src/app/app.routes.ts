import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/bashboard.component";

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent }
];

export default appRoutes;
