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

  // TODO this function temporary until we find out better way to determine user role in trade
  getMyTradeRole(trade) {
    if ((trade.takerPaymentAccountId && 'BUY' === trade.offer.direction) ||
      (!trade.takerPaymentAccountId && 'SELL' === trade.offer.direction)) {
      return 'seller';
    } else {
      return 'buyer';
    }
  }

  ngOnInit() {
    this.tradesCache.list()
      .then(result => {
        this.trades = result.map(trade => ({
          ...trade,
          offer: {},
          buyerPaymentAccount: {},
          role: this.getMyTradeRole(trade)
        }));
        this.total = this.trades.length;
      });
  }

  select(trade) {
    this.onSelect.emit(trade);
  }
}
