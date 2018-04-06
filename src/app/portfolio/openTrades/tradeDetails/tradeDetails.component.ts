import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  trade;
  stepsMap;
  selectedTradeStep;
  selectedTradeRole;
  onStateChange;

  endDate;
  tradeDuration;
  remainingDuration;

  constructor(private activeRoute: ActivatedRoute,
              private toast: ToastService,
              private tradesCache: TradesCacheService,
              private tradesDAO: TradesDAO) {
  }

  ngOnInit() {
    this.init();
    this.onStateChange = this.tradesCache.onStateChange.subscribe(tradeId => {
      if (tradeId === this.trade.id) {
        this.init();
      }
    });
  }

  ngOnDestroy() {
    this.onStateChange.unsubscribe();
  }

  init() {
    this.stepsMap = this.tradesCache.stepsMap;
    this.tradesCache.get(this.activeRoute.params['value'].id)
      .then(result => {
        this.trade = result;
        this.selectedTradeRole = this.trade.tradeRole;
        this.selectedTradeStep = this.stepsMap[this.trade.state].number;
        this.endDate = moment(this.trade.offer.date + this.trade.offer.maxTradePeriod);
        this.tradeDuration = moment.duration(this.trade.offer.maxTradePeriod);
        this.remainingDuration = moment.duration(this.endDate - moment().valueOf());
      });
  }

  confirmPaymentStarted() {
    this.tradesDAO.paymentStarted(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_STARTED'), 'info'))
      .catch(error => this.toast.error(error));
  }

  confirmPaymentReceived() {
    this.tradesDAO.paymentReceived(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_RECEIVED'), 'info'))
      .catch(error => this.toast.error(error));
  }

  withdraw() {
    this.tradesDAO.paymentWithdraw(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.WITHDRAW_SUCCESS'), 'info'))
      .then(() => (this.selectedTradeStep++))
      .catch(error => this.toast.error(error));
  }
}
