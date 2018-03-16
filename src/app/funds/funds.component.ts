import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Tabs} from 'ionic-angular';
import {ReceiveComponent} from './receive/receive.component';
import {SendComponent} from "./send/send.component";
import {ReservedComponent} from "./reserved/reserved.component";
import {LockedComponent} from "./locked/locked.component";
import {TransactionComponent} from "./transactions/transaction.component";

function t(str) {
  return str;
}

t('FUNDS.SUBMENU.RECEIVE');
t('FUNDS.SUBMENU.SEND');
t('FUNDS.SUBMENU.RESERVED');
t('FUNDS.SUBMENU.LOCKED');
t('FUNDS.SUBMENU.TRANSACTIONS');

@Component({
  selector: 'app-funds',
  templateUrl: 'funds.component.html'
})
export class FundsComponent implements OnInit, OnDestroy {
  @ViewChild('foundMenu') foundMenu: Tabs;
  menuTabs = [
    {
      name: 'FUNDS.SUBMENU.RECEIVE',
      component: ReceiveComponent,
      icon: 'md-cloud-download',
      route: 'receive'
    },
    {
      name: 'FUNDS.SUBMENU.SEND',
      component: SendComponent,
      icon: 'md-cloud-upload',
      route: 'send'
    },
    {
      name: 'FUNDS.SUBMENU.RESERVED',
      component: ReservedComponent,
      icon: 'md-bookmark',
      route: 'reserved'
    },
    {
      name: 'FUNDS.SUBMENU.LOCKED',
      component: LockedComponent,
      icon: 'md-lock',
      route: 'locked'
    },
    {
      name: 'FUNDS.SUBMENU.TRANSACTIONS',
      component: TransactionComponent,
      icon: 'logo-usd',
      route: 'transaction'
    }
  ];
  activeMenuIndex = 0;
  private paramSubscribe: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router,) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.activeMenuIndex = this.menuTabs.findIndex(o => {
        return o.route === params['type'];
      });
      this.foundMenu.select(this.activeMenuIndex);
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onTabChange(event) {
    this.router.navigateByUrl('funds/' + this.menuTabs[event.index].route);
  }
}
