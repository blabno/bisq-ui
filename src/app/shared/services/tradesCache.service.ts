import {Injectable} from '@angular/core';
import _ from 'lodash';

import {InfoModalService} from '../infoModal/infoModal.service';
import {ToastService} from './toast.service';
import {TradesDAO} from '../DAO/trades.dao';
import t from '../defineTextToTranslate';

@Injectable()
export class TradesCacheService {

  trades;

  constructor(private initModal: InfoModalService,
              private toast: ToastService,
              private tradesDAO: TradesDAO) {
  }

  init() {
    this.refresh();
    setInterval(() => this.refresh(), 10 * 1000);
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
          path: '/portfolio/open-trades'
        }
      });
    }
  }

  detectStatusChanged(newTrades) {
    const oldTradesMap = _.mapKeys(this.trades, 'id');
    const newTradesMap = _.mapKeys(newTrades, 'id');
    _.forEach(newTradesMap, (newTrade, id) => {
      if (this.trades && _.get(oldTradesMap, `${id}.state`) !== newTrade.state) {
        this.showInfoModal(newTrade);
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
        const modifiedTrades = _.map(result.trades, trade => ({
          ...trade,
          ...this.getMyRoles(trade)
        }));
        this.detectStatusChanged(modifiedTrades);
        this.trades = modifiedTrades;
        return this.trades;
      })
      .catch(() => {
        this.toast.show('TOAST.TRADES.CANT_FETCH_DATA', 'error');
      });
  }

  list() {
    if (this.trades) {
      return Promise.resolve(this.trades);
    } else {
      return this.refresh();
    }
  }
}
