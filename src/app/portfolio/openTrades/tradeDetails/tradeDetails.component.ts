import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AlertController} from 'ionic-angular';
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
  stateChangeSubscriber;
  paramSubscriber;

  endDate;
  tradeDuration;
  remainingDuration;

  constructor(private activeRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private toast: ToastService,
              private tradesCache: TradesCacheService,
              private tradesDAO: TradesDAO,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.init();
    this.stateChangeSubscriber = this.tradesCache.onStateChange.subscribe(tradeId => {
      if (tradeId === this.trade.id) {
        this.init();
      }
    });
    this.paramSubscriber = this.activeRoute.params.subscribe(params => {
      if (this.trade && this.trade.id !== params.id) {
        this.init();
      }
    });
  }

  ngOnDestroy() {
    this.stateChangeSubscriber.unsubscribe();
    this.paramSubscriber.unsubscribe();
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

  confirm(message) {
    return new Promise(resolve => {
      this.alertCtrl.create({
        title: this.translate.instant('WARNING'),
        message: this.translate.instant(message),
        buttons: [
          {
            text: this.translate.instant('CANCEL'),
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: this.translate.instant('CONFIRM'),
            handler: () => resolve(true)
          }
        ]
      }).present();
    });

  }

  confirmPaymentStarted() {
    this.confirm(t('PORTFOLIO.OPEN_TRADES.PAYMENT_STARTED_ALERT')).then(isConfirmed =>
      isConfirmed && this.tradesDAO.paymentStarted(this.trade.id)
        .then(() => this.tradesCache.refresh())
        .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_STARTED'), 'success'))
        .catch(error => this.toast.error(error))
    );
  }

  confirmPaymentReceived() {
    this.confirm(t('PORTFOLIO.OPEN_TRADES.PAYMENT_RECEIVED_ALERT')).then(isConfirmed =>
      isConfirmed && this.tradesDAO.paymentReceived(this.trade.id)
        .then(() => this.tradesCache.refresh())
        .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.PAYMENT_RECEIVED'), 'success'))
        .catch(error => this.toast.error(error))
    );
  }

  withdraw() {
    this.tradesDAO.paymentWithdraw(this.trade.id)
      .then(() => this.tradesCache.refresh())
      .then(() => this.toast.show(t('PORTFOLIO.OPEN_TRADES.WITHDRAW_SUCCESS'), 'success'))
      .then(() => (this.selectedTradeStep++))
      .catch(error => this.toast.error(error));
  }
}
