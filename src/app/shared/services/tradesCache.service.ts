import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import _ from 'lodash';

import {InfoModalService} from '../infoModal/infoModal.service';
import {ToastService} from './toast.service';
import {TradesDAO} from '../DAO/trades.dao';
import t from '../defineTextToTranslate';

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

@Injectable()
export class TradesCacheService {
  private trades;
  private oldTrades;
  private interval;
  private stateChangeSubject = new Subject<string>();

  stepsMap = stepsMap;
  onStateChange = this.stateChangeSubject.asObservable();


  constructor(private initModal: InfoModalService,
              private toast: ToastService,
              private tradesDAO: TradesDAO) {
  }

  init() {
    this.stop();
    this.interval = setInterval(() => this.refresh(), 10 * 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  showInfoModal(trade) {
    let modalOptions;
    if ('DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN' === trade.state && 'buyer' === trade.tradeRole) {
      modalOptions = {
        title: t('TRADES_CACHE.TRADE_CONFIRMED_IN_BLOCKCHAIN_TITLE'),
        text: t('TRADES_CACHE.TRADE_CONFIRMED_IN_BLOCKCHAIN_BUYER_TEXT'),
        translateParams: {
          id: trade.id.split('-')[0],
          volume: _.round(trade.tradePrice * trade.tradeAmount / 10e11, 2),
          counterCurrency: trade.offer.counterCurrencyCode,
          baseCurrency: trade.offer.baseCurrencyCode,
          sellerPaymentDetails: trade.sellerPaymentAccount.paymentDetails,
        }
      };
    }
    if ('DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN' === trade.state && 'seller' === trade.tradeRole) {
      modalOptions = {
        title: t('TRADES_CACHE.TRADE_CONFIRMED_IN_BLOCKCHAIN_TITLE'),
        text: t('TRADES_CACHE.TRADE_CONFIRMED_IN_BLOCKCHAIN_SELLER_TEXT'),
        translateParams: {
          id: trade.id.split('-')[0]
        }
      };
    }
    if ('SELLER_RECEIVED_FIAT_PAYMENT_INITIATED_MSG' === trade.state && 'seller' === trade.tradeRole) {
      modalOptions = {
        title: t('TRADES_CACHE.TRADE_PAYMENT_INITIATED_TITLE'),
        text: t('TRADES_CACHE.TRADE_PAYMENT_INITIATED_TEXT'),
        translateParams: {
          id: trade.id.split('-')[0],
          counterCurrency: trade.offer.counterCurrencyCode,
          volume: _.round(trade.tradePrice * trade.tradeAmount / 10e11, 2),
          baseCurrency: trade.offer.baseCurrencyCode,
          buyerPaymentName: trade.buyerPaymentAccount.holderName,
        }
      }
    }
    if ('BUYER_RECEIVED_PAYOUT_TX_PUBLISHED_MSG' === trade.state && 'buyer' === trade.tradeRole) {
      modalOptions = {
        title: t('TRADES_CACHE.TRADE_COMPLETED_TITLE'),
        text: t('TRADES_CACHE.TRADE_COMPLETED_TEXT'),
        translateParams: {
          id: trade.id.split('-')[0],
          baseCurrency: trade.offer.baseCurrencyCode
        }
      };
    }
    if (modalOptions) {
      this.initModal.show({
        ...modalOptions,
        redirectButton: {
          text: t('TRADES_CACHE.REDIRECT_TO_OPEN_TRADES'),
          path: `/portfolio/open-trades/${trade.id}`
        }
      });
    }
  }

  detectStatusChanged() {
    const oldTradesMap = _.mapKeys(this.oldTrades, 'id');
    const newTradesMap = _.mapKeys(this.trades, 'id');
    _.forEach(newTradesMap, (newTrade, id) => {
      if (this.oldTrades && _.get(oldTradesMap, `${id}.state`) !== newTrade.state) {
        this.showInfoModal(newTrade);
        this.stateChangeSubject.next(newTrade.id);
      }
    })
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
    } else if (trade.takerPaymentAccountId && 'SELL' === trade.offer.direction) {
      return {
        tradeRole: 'buyer',
        offerRole: 'taker'
      };
    } else {
      return {
        tradeRole: 'buyer',
        offerRole: 'maker'
      };
    }
  }

  refresh() {
    return this.tradesDAO.query()
      .then((result: any) => {
        this.trades = _.map(result.trades, trade => ({
          ...trade,
          ...this.getMyRoles(trade)
        }));
        this.detectStatusChanged();
        this.oldTrades = this.trades;
        return this.trades;
      })
      .catch(err => {
        this.toast.show('TOAST.TRADES.CANT_FETCH_DATA', 'error');
        clearInterval(this.interval);
        throw err;
      });
  }

  list() {
    if (this.trades) {
      return Promise.resolve(this.trades);
    } else {
      return this.refresh();
    }
  }

  get(id) {
    if (this.trades) {
      return Promise.resolve(_.find(this.trades, {id}));
    } else {
      return this.refresh()
        .then(result => _.find(result, {id}));
    }
  }
}
