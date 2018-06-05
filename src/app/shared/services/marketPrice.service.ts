import Promise from 'bluebird';
import {Injectable} from '@angular/core';
import moment from 'moment';

import {CurrenciesDAO} from '../DAO/currencies.dao';
import {SettingsService} from './settings.service';
import {ToastService} from './toast.service';

const PREFIX = 'BTC_';

@Injectable()
export class MarketPriceService {
  private prices;
  private loading = false;
  private currentRequestPromise;
  private nextRefreshDate;

  constructor(private currenciesDAO: CurrenciesDAO, private settings: SettingsService, private toast: ToastService) {
    if (this.settings.backendUrl) {
      this.getMarketPrices();
    }
  }

  getMarketPrices(forceReload = false, currencies = []) {
    if (this.loading) {
      return this.currentRequestPromise;
    }
    if (this.prices && !forceReload && moment().isBefore(this.nextRefreshDate)) {
      return Promise.resolve(this.prices);
    }
    this.loading = true;
    this.currentRequestPromise = this.currenciesDAO
      .getMarketPrices(currencies)
      .then(res => {
        // this.prices = _.mapKeys(res['prices'], (value, key) => PREFIX + key)
        this.prices = res['prices'];
        this.loading = false;
        this.nextRefreshDate = moment().add(1, 'minute');
        return this.prices;
      })
      .catch(error => {
        this.loading = false;
        this.toast.error(error);
      });
    return this.currentRequestPromise;
  }

  get(cryptoSymbol, fiatSymbol) {
    return this.getByCode(`${cryptoSymbol}_${fiatSymbol}`);
  }

  getByCode(code) {
    return this.getMarketPrices().then(res => this.prices[`${code}`]);
  }

  list() {
    return this.getMarketPrices();
  }
}
