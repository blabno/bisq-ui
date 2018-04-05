import {Injectable} from '@angular/core';
import _ from 'lodash';

@Injectable()
export class MarketPrizeService {
  markets;

  constructor() {
    this.refreshMarkets();
  }

  refreshMarkets() {
    if (!this.markets) {
      this.markets = {
        BTC_EUR: 7000,
        BTC_PLN: 30000
      }
    } else {
      this.markets = _.mapValues(this.markets, value => value * (1 + _.random(-0.01, 0.01)));
    }
  }

  private randomNumber(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  get(cryptoSymbol, fiatSymbol) {
    this.refreshMarkets();
    const price = this.markets[`${cryptoSymbol}_${fiatSymbol}`];
    return Promise.resolve(price || this.randomNumber(500,30000));
  }

  list() {
    this.refreshMarkets();
    return Promise.resolve(this.markets);
  }
}
