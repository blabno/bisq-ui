import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TradesDAO} from '../../../shared/DAO/trades.dao';
import _ from 'lodash';
import {ToastService} from '../../../shared/services/toast.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit {
  @Output() onSelect = new EventEmitter<any>();

  trades = [];
  total = 0;

  constructor(private tradesDAO: TradesDAO, private toast: ToastService) {
  }

  ngOnInit() {
    this.tradesDAO.query()
      .then(res => {
        this.trades = _.get(res, 'trades') || [];
        this.total = _.get(res, 'total') || 0;
      })
      .catch(() => {
        this.toast.show('TOAST.TRADES.CANT_FETCH_DATA', 'error');
      });
  }

  select(trade) {
    this.onSelect.emit(trade);
  }
}
