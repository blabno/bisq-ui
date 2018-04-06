import {Component, OnInit, OnDestroy} from '@angular/core';

import {TradesCacheService} from '../../../shared/services/tradesCache.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit, OnDestroy {
  stepsMap;
  trades = [];
  total = 0;
  loading = true;
  onListChange;

  constructor(private tradesCache: TradesCacheService) {
  }

  ngOnInit() {
    this.tradesCache.refresh();
    this.onListChange = this.tradesCache.onListChange.subscribe(() => {
      this.init();
    });
  }

  ngOnDestroy() {
    this.onListChange.unsubscribe();
  }

  init() {
    this.stepsMap = this.tradesCache.stepsMap;
    this.tradesCache.list()
      .then(result => {
        this.trades = result;
        this.total = this.trades.length;
        this.loading = false;
      });
  }
}
