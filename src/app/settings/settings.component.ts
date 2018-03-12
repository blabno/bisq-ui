import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Tabs} from 'ionic-angular';

import {PreferencesComponent} from './preferences/preferences.component';
import { NetworkInfoComponent } from './network-info/network-info.component';
import {AboutComponent} from './about/about.component';
function _(str) {
  return str;
}
_('PREFERENCES');

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit, OnDestroy {
  @ViewChild('settingsMenu') settingsMenu: Tabs;
  menuTabs = [
    {
      name: 'PREFERENCES',
      component: PreferencesComponent,
      icon: 'md-settings',
      route: 'preferences'
    },
    {
      name: 'NETWORK_INFO',
      component: NetworkInfoComponent,
      icon: 'md-people',
      route: 'network-info'
    },
    {
      name: 'ABOUT',
      component: AboutComponent,
      icon: 'md-more',
      route: 'about'
    }
  ];
  activeMenuIndex = 0;
  private paramSubscribe: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.activeMenuIndex = this.menuTabs.findIndex(o => {
        return o.route === params['type'];
      });
      this.settingsMenu.select(this.activeMenuIndex);
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onTabChange(event) {
    this.router.navigateByUrl('settings/' + this.menuTabs[event.index].route);
  }
}
