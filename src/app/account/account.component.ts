import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Tabs} from 'ionic-angular';

import {CurrencyComponent} from './currency/currency.component';
import {AltcoinsComponent} from './altcoins/altcoins.component';
import {ArbitratorComponent} from './arbitrator/arbitrator.component';
import {WalletPassComponent} from './wallet-pass/wallet-pass.component';
import {WalletSeedComponent} from './wallet-seed/wallet-seed.component';
import {BackupComponent} from './backup/backup.component';

function _(str) {
  return str;
}
_('ACCOUNT.SUBMENU.CURRENCY_ACCOUNTS');
_('ACCOUNT.SUBMENU.ALTCOINS_ACCOUNTS');
_('ACCOUNT.SUBMENU.ARBITRATOR');
_('ACCOUNT.SUBMENU.WALLET_PASSWORD');
_('ACCOUNT.SUBMENU.WALLET_SEED');
_('ACCOUNT.SUBMENU.BACKUP');

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {
  @ViewChild('accountMenu') accountMenu: Tabs;
  menuTabs = [
    {
      name: 'ACCOUNT.SUBMENU.CURRENCY_ACCOUNTS',
      component: CurrencyComponent,
      icon: 'md-cash',
      route: 'currency'
    },
    {
      name: 'ACCOUNT.SUBMENU.ALTCOINS_ACCOUNTS',
      component: AltcoinsComponent,
      icon: 'md-link',
      route: 'altcoins'
    },
    {
      name: 'ACCOUNT.SUBMENU.ARBITRATOR',
      component: ArbitratorComponent,
      icon: 'md-contacts',
      route: 'arbitrator'
    },
    {
      name: 'ACCOUNT.SUBMENU.WALLET_PASSWORD',
      component: WalletPassComponent,
      icon: 'md-lock',
      route: 'wallet-password'
    },
    {
      name: 'ACCOUNT.SUBMENU.WALLET_SEED',
      component: WalletSeedComponent,
      icon: 'md-key',
      route: 'wallet-seed'
    },
    {
      name: 'ACCOUNT.SUBMENU.BACKUP',
      component: BackupComponent,
      icon: 'md-cloud-download',
      route: 'backup'
    }
  ];
  activeMenuIndex = 0;
  private paramSubscribe: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.activeMenuIndex = this.menuTabs.findIndex((o) => {
        return o.route === params['type']
      });
      this.accountMenu.select(this.activeMenuIndex);
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onTabChange(event) {
    this.router.navigateByUrl('account/' + this.menuTabs[event.index].route);
  }
}
