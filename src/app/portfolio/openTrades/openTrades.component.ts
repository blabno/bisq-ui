import {Component, OnDestroy, OnInit} from '@angular/core';
import {TradesDAO} from '../../shared/DAO/trades.dao';
import _ from 'lodash';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-open-trades',
  templateUrl: 'openTrades.component.html'
})
export class OpenTradesComponent implements OnInit, OnDestroy {
  public trades = [];
  public total = 0;

  constructor(private tradesDAO: TradesDAO, private toast: ToastService) {
  }

  ngOnInit() {
    this.tradesDAO.query().then(res => {
      this.trades = _.get(res, 'trades') || [];
      this.total = _.get(res, 'total') || 0;
    })
      .catch(() => {
        this.toast.show('TOAST.TRADES.CANT_FETCH_DATA', 'error');
      });
  }

  ngOnDestroy() {
  }
}
