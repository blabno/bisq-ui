import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MainComponent} from './main/main.component';
import {MenuComponent} from './menu/menu.component';

import appRoutes from './app.routes';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SumaryComponent} from "./dashboard/sumary/sumary.component";

@NgModule({
  declarations: [
    MyApp,
    MainComponent,
    MenuComponent,
    DashboardComponent,
    SumaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainComponent,
    MenuComponent,
    DashboardComponent,
    SumaryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
