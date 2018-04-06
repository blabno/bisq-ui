import {Component} from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import _ from "lodash";

import t from '../../defineTextToTranslate';

@Component({
  selector: 'app-section-header',
  templateUrl: './sectionHeader.component.html'
})
export class SectionHeaderComponent {
  constructor(private router: Router) {
  }

  sectionTitle;
  routerSubscribe;

  ngOnInit() {
    this.updateSectionTitle(this.router.url);
    this.routerSubscribe = this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        this.updateSectionTitle(route.url);
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscribe.unsubscribe();
  }

  updateSectionTitle(url) {
    const pathsArray = [
      {path: '/offers/buy/create', title: ['MENU.BUY', t('OFFERS.CREATE.TITLE')]},
      {path: '/offers/buy/take', title: ['MENU.BUY', t('OFFERS.TAKE_OFFER.TITLE')]},
      {path: '/offers/buy', title: ['MENU.BUY']},
      {path: '/offers/sell/create', title: ['MENU.SELL', t('OFFERS.CREATE.TITLE')]},
      {path: '/offers/sell/take', title: ['MENU.SELL', t('OFFERS.TAKE_OFFER.TITLE')]},
      {path: '/offers/sell', title: ['MENU.SELL']},
      {path: '/portfolio/my-open-offers', title: ['MENU.PORTFOLIO', 'PORTFOLIO.SUBMENU.MY_OPEN_OFFERS']},
      {path: '/portfolio/open-trades', title: ['MENU.PORTFOLIO', 'PORTFOLIO.SUBMENU.OPEN_TRADES']},
      {path: '/portfolio/history', title: ['MENU.PORTFOLIO', 'PORTFOLIO.SUBMENU.HISTORY']},
      {path: '/funds/receive', title: ['MENU.FUNDS', 'FUNDS.SUBMENU.RECEIVE']},
      {path: '/funds/send', title: ['MENU.FUNDS', 'FUNDS.SUBMENU.SEND']},
      {path: '/funds/reserved', title: ['MENU.FUNDS', 'FUNDS.SUBMENU.RESERVED']},
      {path: '/funds/locked', title: ['MENU.FUNDS', 'FUNDS.SUBMENU.LOCKED']},
      {path: '/funds/transaction', title: ['MENU.FUNDS', 'FUNDS.SUBMENU.TRANSACTIONS']},
      {path: '/support', title: ['MENU.SUPPORT']},
      {path: '/settings/preferences', title: ['MENU.SETTINGS', 'SETTINGS.SUBMENU.PREFERENCES']},
      {path: '/settings/network-info', title: ['MENU.SETTINGS', 'SETTINGS.SUBMENU.NETWORK_INFO']},
      {path: '/settings/backend-url', title: ['MENU.SETTINGS', 'SETTINGS.SUBMENU.BACKEND']},
      {path: '/settings/about', title: ['MENU.SETTINGS', 'SETTINGS.SUBMENU.ABOUT']},
      {path: '/account/currency', title: ['MENU.ACCOUNT', 'ACCOUNT.SUBMENU.CURRENCY_ACCOUNTS']},
      {path: '/account/altcoins', title: ['MENU.ACCOUNT', 'ACCOUNT.SUBMENU.ALTCOINS_ACCOUNTS']},
      {path: '/account/arbitrator', title: ['MENU.ACCOUNT', 'ACCOUNT.SUBMENU.ARBITRATOR']}
    ];
    const pathObject = _.find(pathsArray, object => _.includes(url, object.path)) || {};
    this.sectionTitle = pathObject.title;
  }
}
