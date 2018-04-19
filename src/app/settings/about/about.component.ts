import {Component, OnInit} from '@angular/core';
import {AppDAO} from '../../shared/DAO/app.dao';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
  public marketPricesProviders = [
    {name: 'BitcoinAverage', www: 'https://bitcoinaverage.com'},
    {name: 'Poloniex', www: 'https://poloniex.com'},
    {name: 'Coinmarketcap', www: 'https://coinmarketcap.com'}
  ];
  public miningFeesEstimationProviders = [
    {name: '21', www: 'https://bitcoinfees.earn.com'}
  ];
  public versions = {};

  constructor(private appDAO: AppDAO) {
  }

  ngOnInit() {
    this.appDAO.getVersions().then(res => {
      this.versions = res;
    });
  }

  public openLink(url) {
    window.open(url, '_system', 'location=yes');
  }
}
