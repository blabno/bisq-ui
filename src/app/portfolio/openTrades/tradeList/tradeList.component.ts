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

  getMyRoles(trade) {
    if (trade.takerPaymentAccountId && 'BUY' === trade.offer.direction) {
      return {
        tradeRole: 'seller',
        offerRole: 'taker'
      };
    } else if (!trade.takerPaymentAccountId && 'SELL' === trade.offer.direction) {
      return {
        tradeRole: 'seller',
        offerRole: 'maker'
      };
    }
    if (trade.takerPaymentAccountId && 'SELL' === trade.offer.direction) {
      return {
        tradeRole: 'seller',
        offerRole: 'taker'
      };
    } else {
      return {
        tradeRole: 'buyer',
        offerRole: 'maker'
      };
    }
  }

  ngOnInit() {
    this.tradesCache.list()
      .then(result => {
        this.trades = result.map(trade => ({
          ...trade,
          ...this.getMyRoles(trade)
        }));
        this.total = this.trades.length;
      });
  }

  select(trade) {
    this.onSelect.emit(trade);
  }
}
