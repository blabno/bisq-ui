import {Component} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html'
})
export class AboutComponent {
  public marketPricesProviders = [
    {name: 'BitcoinAverage', www: 'https://bitcoinaverage.com'},
    {name: 'Poloniex', www: 'https://poloniex.com'},
    {name: 'Coinmarketcap', www: 'https://coinmarketcap.com'}
  ];
  public miningFeesEstimationProviders = [
    {name: '21', www: 'https://bitcoinfees.earn.com'}
  ];
  public subsystems = [
    {name: 'Network version', version: '1'},
    {name: 'P2P message version', version: '10'},
    {name: 'Local DB version', version: '1'},
    {name: 'Trade protocol version', version: '1'}
  ];
  public appVersion = '0.0.1';
  constructor() {}

  public getSubsystemsString() {
    return _.map(this.subsystems, system => {
      return `${system.name}: ${system.version}`;
    }).join('; ');
  }
  public openLink(url) {
    window.open(url, '_system', 'location=yes');
  }
}
