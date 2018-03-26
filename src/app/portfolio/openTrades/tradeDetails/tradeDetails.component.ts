import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import moment from 'moment';

import {ToastService} from '../../../shared/services/toast.service';
import {TradesCacheService} from '../../../shared/services/tradesCache.service';
import {TradesDAO} from '../../../shared/DAO/trades.dao';
import t from '../../../shared/defineTextToTranslate';

@Component({
  selector: 'app-trade-details',
  templateUrl: 'tradeDetails.component.html'
})
export class TradeDetailsComponent implements OnInit {
  @Input() trade: any;
  @Input() stepsMap: any;
  @Output() onCancel = new EventEmitter<any>();

  selectedTradeStep;
  selectedTradeRole;

  endDate;
  tradeDuration;
  remainingDuration;

  constructor(private toast: ToastService, private tradesCache: TradesCacheService, private tradesDAO: TradesDAO) {
  }

  ngOnInit() {
    this.selectedTradeRole = this.trade.tradeRole;
    this.selectedTradeStep = this.stepsMap[this.trade.state].number;
    this.endDate = moment(this.trade.offer.date + this.trade.offer.maxTradePeriod);
    this.tradeDuration = moment.duration(this.trade.offer.maxTradePeriod);
    this.remainingDuration = moment.duration(this.endDate - moment().valueOf());
  }

  confirmPaymentStarted() {
    this.tradesDAO.paymentStarted(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_STARTED'), 'info'))
      .then(() => (this.selectedTradeStep++))
      .catch(() => this.showErrorToast());
  }

  confirmPaymentReceived() {
    this.tradesDAO.paymentReceived(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_RECEIVED'), 'info'))
      .then(() => (this.selectedTradeStep++))
      .catch(() => this.showErrorToast());
  }

  withdraw() {
    this.tradesDAO.paymentWithdraw(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.WITHDRAW_SUCCESS'), 'info'))
      .then(() => (this.selectedTradeStep++))
      .catch(() => this.showErrorToast());
  }

  cancel() {
    this.onCancel.emit();
  }

  showErrorToast() {
    this.toast.show('TOAST.SOMETHING_WENT_WRONG', 'error');
  }
}
