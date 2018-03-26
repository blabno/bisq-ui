import {Component} from '@angular/core';

import t from '../../shared/defineTextToTranslate';

const step1 = {
  number: 1,
  percentage: 0,
  labels: {
    buyer: t('PORTFOLIO.OPEN_TRADES.STEP1_BUYER_LABEL'),
    seller: t('PORTFOLIO.OPEN_TRADES.STEP1_SELLER_LABEL')
  }
};
const step2 = {
  number: 2,
  percentage: 33,
  labels: {
    buyer: t('PORTFOLIO.OPEN_TRADES.STEP2_BUYER_LABEL'),
    seller: t('PORTFOLIO.OPEN_TRADES.STEP2_SELLER_LABEL')
  }
};
const step3 = {
  number: 3,
  percentage: 66,
  labels: {
    buyer: t('PORTFOLIO.OPEN_TRADES.STEP3_BUYER_LABEL'),
    seller: t('PORTFOLIO.OPEN_TRADES.STEP3_SELLER_LABEL')
  }
};
const step4 = {
  number: 4,
  percentage: 100,
  labels: {
    buyer: t('PORTFOLIO.OPEN_TRADES.STEP4_BUYER_LABEL'),
    seller: t('PORTFOLIO.OPEN_TRADES.STEP4_SELLER_LABEL')
  }
};

const stepsMap = {
  MAKER_RECEIVED_DEPOSIT_TX_PUBLISHED_MSG: step1,
  TAKER_SAW_ARRIVED_DEPOSIT_TX_PUBLISHED_MSG: step1,
  DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN: step2,
  BUYER_SAW_ARRIVED_FIAT_PAYMENT_INITIATED_MSG: step3,
  SELLER_RECEIVED_FIAT_PAYMENT_INITIATED_MSG: step3,
  TAKER_RECEIVED_PUBLISH_DEPOSIT_TX_REQUEST: step3,
  SELLER_SAW_ARRIVED_PAYOUT_TX_PUBLISHED_MSG: step4,
  BUYER_RECEIVED_PAYOUT_TX_PUBLISHED_MSG: step4,
  steps: [step1, step2, step3, step4]
};

@Component({
  selector: 'app-open-trades',
  templateUrl: 'openTrades.component.html'
})
export class OpenTradesComponent {
  stepsMap = stepsMap;
  isListVisible = true;
  selectedTrade;

  constructor() {
  }

  selectTrade(trade) {
    this.selectedTrade = trade;
    this.isListVisible = false;
  }

  cancel() {
    this.isListVisible = true;
  }
}
