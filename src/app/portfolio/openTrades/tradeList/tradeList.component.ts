import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {ToastService} from '../../../shared/services/toast.service';
import {TradesCacheService} from '../../../shared/services/tradesCache.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit {
  @Output() onSelect = new EventEmitter<any>();

  trades = [];
  total = 0;

  constructor(private tradesCache: TradesCacheService, private toast: ToastService) {
  }

  ngOnInit() {
    this.trades = this.tradesCache.list();
    this.total = this.trades.length;
  }

  select(trade) {
    this.onSelect.emit(trade);
  }
}
