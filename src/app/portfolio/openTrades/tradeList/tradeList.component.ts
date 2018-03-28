import {Component, OnInit} from '@angular/core';

import {TradesCacheService} from '../../../shared/services/tradesCache.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit {
  stepsMap;
  trades = [];
  total = 0;

  constructor(private tradesCache: TradesCacheService) {
  }

  ngOnInit() {
    this.stepsMap = this.tradesCache.stepsMap;
    this.tradesCache.list()
      .then(result => {
        this.trades = result;
        this.total = this.trades.length;
      });
  }
}
