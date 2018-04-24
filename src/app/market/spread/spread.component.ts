import {Component, OnInit} from '@angular/core';

const mockData = [
  {
    currency: 'Monero',
    offers: 29,
    buy: 12,
    sell: 17,
    total: 14.5076,
    spread: 0.6
  },
  {
    currency: 'Brithis Pound Sterling (GBP)',
    offers: 9,
    buy: 1,
    sell: 8,
    total: 0.9,
    spread: 2.5
  },
  {
    currency: 'Euro (EUR)',
    offers: 41,
    buy: 3,
    sell: 38,
    total: 3.3066,
    spread: -0.5
  }
];

@Component({
  selector: 'app-market-spread',
  templateUrl: 'spread.component.html'
})
export class SpreadComponent implements OnInit{

  public loading:boolean = false;
  public data: Array<Object> = [];

  constructor() {
  }

  ngOnInit(){
    this.loading = true;
    setTimeout(()=>{
      this.data = mockData;
      this.loading = false;
    }, 500);
  }
}
