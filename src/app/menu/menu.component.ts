import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @ViewChild('navbarToggler') navbarToggler;

  sectionTitle = ['MENU.ACCOUNT', 'ACCOUNT.SUBMENU.CURRENCY_ACCOUNTS'];
  routerSubscribe;

  constructor(private router: Router) {
  }

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
    console.log(url);
    const pathsArray = [
      {path: '/offers/buy', title: ['MENU.BUY']},
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

  onMenuItemClick() {
    if (992 > window.innerWidth) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
