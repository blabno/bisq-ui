import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import moment from 'moment';

import {ToastService} from '../../../shared/services/toast.service';
import {TradesDAO} from '../../../shared/DAO/trades.dao';

const stepsMap = {
  MAKER_RECEIVED_DEPOSIT_TX_PUBLISHED_MSG: 1, // buyer
  TAKER_SAW_ARRIVED_DEPOSIT_TX_PUBLISHED_MSG: 1, // seller
  DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN: 2,
  BUYER_SAW_ARRIVED_FIAT_PAYMENT_INITIATED_MSG: 3,
  SELLER_RECEIVED_FIAT_PAYMENT_INITIATED_MSG: 3,
  TAKER_RECEIVED_PUBLISH_DEPOSIT_TX_REQUEST: 3,
  SELLER_SAW_ARRIVED_PAYOUT_TX_PUBLISHED_MSG: 4,
  BUYER_RECEIVED_PAYOUT_TX_PUBLISHED_MSG: 4
};

@Component({
  selector: 'app-trade-details',
  templateUrl: 'tradeDetails.component.html'
})
export class TradeDetailsComponent implements OnInit {
  @Input() trade: any;
  @Output() onCancel = new EventEmitter<any>();

  selectedTradeStep = 0;
  selectedTradeRole = 'buyer';

  endDate;
  tradeDuration;
  remainingDuration;

  constructor(private toast: ToastService, private tradesDAO: TradesDAO) {
  }

  ngOnInit() {
    this.selectedTradeRole = this.trade.role;
    this.selectedTradeStep = stepsMap[this.trade.state];
    this.endDate = moment(this.trade.offer.date + this.trade.offer.maxTradePeriod);
    this.tradeDuration = moment.duration(this.trade.offer.maxTradePeriod);
    this.remainingDuration = moment.duration(this.endDate - moment().valueOf());
  }

  confirmPaymentStarted() {
    this.tradesDAO.paymentStarted(this.trade.id)
      .then(() => (this.selectedTradeStep++))
      .catch((error) => console.log(error) || this.showErrorToast());
  }

  confirmPaymentReceived() {
    this.tradesDAO.paymentReceived(this.trade.id)
      .then(() => (this.selectedTradeStep++))
      .catch((error) => console.log(error) || this.showErrorToast());
  }

  withdraw() {
    this.tradesDAO.paymentWithdraw(this.trade.id)
      .then(() => (this.selectedTradeStep++))
      .catch((error) => console.log(error) || this.showErrorToast());
  }

  cancel() {
    this.onCancel.emit();
  }

  showErrorToast() {
    this.toast.show('TOAST.SOMETHING_WENT_WRONG', 'error');
  }
}
