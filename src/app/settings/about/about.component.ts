import {Component} from '@angular/core';

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
  public subsystems = {
    network: '1',
    p2p: '10',
    localDb: '0.5.8',
    tradeProtocol: '3.0'
  };
  public appVersion = '0.0.1';

  constructor() {
  }

  public openLink(url) {
    window.open(url, '_system', 'location=yes');
  }
}
