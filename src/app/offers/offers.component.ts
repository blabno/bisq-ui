import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html'
})
export class OffersComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: ActivatedRoute) {
  }

  offerList = [
    {
      id: 'zxc098',
      market: 'BTC/USD',
      price: '8756.9300 (0.00%)',
      btc: '0.05-0.0950',
      amount: '436.87 - 830.05 USD',
      method: 'zelle',
      peerAddress: '3g2upl4pq6kufc4m.onion'
    },
    {
      id: 'qwe123',
      market: 'SC/BTC',
      price: ' 0.00000155',
      btc: '0.1',
      amount: '64516.12903225 SC',
      method: 'Altcoins',
      peerAddress: 'kpvz7kpmcmne52qf.onion'
    },
    {
      id: 'zxc098',
      market: 'BTC/USD',
      price: '8756.9300 (0.00%)',
      btc: '0.05-0.0950',
      amount: '436.87 - 830.05 USD',
      method: 'zelle',
      peerAddress: '3g2upl4pq6kufc4m.onion'
    },
    {
      id: 'qwe123',
      market: 'SC/BTC',
      price: ' 0.00000155',
      btc: '0.1',
      amount: '64516.12903225 SC',
      method: 'Altcoins',
      peerAddress: 'kpvz7kpmcmne52qf.onion'
    },
  ];

  private paramSubscribe: any;
  listType: string;

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.listType = params['type'];
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onSelect(id) {
  }
}
