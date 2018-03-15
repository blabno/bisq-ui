import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Tabs} from 'ionic-angular';
import {MyOpenOffersComponent} from './myOpenOffers/myOpenOffers.component';
import {OpenTradesComponent} from './openTrades/openTrades.component';
import {HistoryComponent} from './history/history.component';

function t(str) {
  return str;
}

t('PORTFOLIO.SUBMENU.MY_OPEN_OFFERS');
t('PORTFOLIO.SUBMENU.OPEN_TRADES');
t('PORTFOLIO.SUBMENU.HISTORY');

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  @ViewChild('portfolioMenu') portfolioMenu: Tabs;
  menuTabs = [
    {
      name: 'PORTFOLIO.SUBMENU.MY_OPEN_OFFERS',
      component: MyOpenOffersComponent,
      icon: 'md-pricetag',
      route: 'my-open-offers'
    },
    {
      name: 'PORTFOLIO.SUBMENU.OPEN_TRADES',
      component: OpenTradesComponent,
      icon: 'md-appstore',
      route: 'open-trades'
    },
    {
      name: 'PORTFOLIO.SUBMENU.HISTORY',
      component: HistoryComponent,
      icon: 'md-time',
      route: 'history'
    }
  ];
  activeMenuIndex = 0;
  private paramSubscribe: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, ) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.activeMenuIndex = this.menuTabs.findIndex(o => {
        return o.route === params['type'];
      });
      this.portfolioMenu.select(this.activeMenuIndex);
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onTabChange(event) {
    this.router.navigateByUrl('portfolio/' + this.menuTabs[event.index].route);
  }
}
