import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import _ from 'lodash';

import {TradesCacheService} from '../../../shared/services/tradesCache.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit {
  @Input() stepsMap: any;
  @Output() onSelect = new EventEmitter<any>();

  trades = [];
  total = 0;

  constructor(private tradesCache: TradesCacheService) {
  }

  ngOnInit() {
    this.tradesCache.list()
      .then(result => {
        this.trades = result;
        this.total = this.trades.length;
      });
  }

  select(trade) {
    this.onSelect.emit(trade);
  }
}
