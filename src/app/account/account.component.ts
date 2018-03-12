import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
_('CURRENCY_ACCOUNTS');
_('ALTCOINS_ACCOUNTS');
_('ARBITRATOR');
_('WALLET_PASSWORD');
_('WALLET_SEED');
_('BACKUP');

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html'
})
export class AccountComponent implements OnInit, OnDestroy {
  @ViewChild('accountMenu') accountMenu: Tabs;
  menuTabs = [
    {
      name: 'CURRENCY_ACCOUNTS',
      component: CurrencyComponent,
      icon: 'md-cash',
      route: 'currency'
    },
    {
      name: 'ALTCOINS_ACCOUNTS',
      component: AltcoinsComponent,
      icon: 'md-link',
      route: 'altcoins'
    },
    {
      name: 'ARBITRATOR',
      component: ArbitratorComponent,
      icon: 'md-contacts',
      route: 'arbitrator'
    },
    {
      name: 'WALLET_PASSWORD',
      component: WalletPassComponent,
      icon: 'md-lock',
      route: 'wallet-password'
    },
    {
      name: 'WALLET_SEED',
      component: WalletSeedComponent,
      icon: 'md-key',
      route: 'wallet-seed'
    },
    {
      name: 'BACKUP',
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
