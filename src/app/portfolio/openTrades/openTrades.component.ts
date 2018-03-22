import {Component, OnInit, OnDestroy} from '@angular/core';
import {TradesDAO} from '../../shared/DAO/trades.dao';
import _ from 'lodash';
import {ToastService} from '../../shared/services/toast.service';

const stepsMap = {
  TAKER_SAW_ARRIVED_DEPOSIT_TX_PUBLISHED_MSG: 1,
  DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN: 2,
  BUYER_SAW_ARRIVED_FIAT_PAYMENT_INITIATED_MSG: 3,
  TAKER_RECEIVED_PUBLISH_DEPOSIT_TX_REQUEST: 3,
  BUYER_RECEIVED_PAYOUT_TX_PUBLISHED_MSG: 4
};

@Component({
  selector: 'app-open-trades',
  templateUrl: 'openTrades.component.html'
})
export class OpenTradesComponent implements OnInit, OnDestroy {
  trades = [];
  total = 0;
  isListVisible = true;
  selectedTrade;
  selectedTradeRole = 'buyer';
  selectedTradeStep = 0;

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

  select(trade) {
    console.log(trade);
    this.selectedTrade = trade;
    this.selectedTradeStep = stepsMap[trade.state];
    this.isListVisible = false;
  }

  cancel() {
    this.isListVisible = true;
  }

  ngOnDestroy() {
  }
}
