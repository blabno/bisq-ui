import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

const stepsMap = {
  MAKER_RECEIVED_DEPOSIT_TX_PUBLISHED_MSG: 1, // buyer
  TAKER_SAW_ARRIVED_DEPOSIT_TX_PUBLISHED_MSG: 1, // seller
  DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN: 2,
  BUYER_SAW_ARRIVED_FIAT_PAYMENT_INITIATED_MSG: 3,
  TAKER_RECEIVED_PUBLISH_DEPOSIT_TX_REQUEST: 3,
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

  constructor() {
  }

  ngOnInit() {
    this.selectedTradeStep = stepsMap[this.trade.state];
  }

  cancel() {
    this.onCancel.emit();
  }
}
