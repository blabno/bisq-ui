import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {TradesDAO} from "../DAO/trades.dao";
import {ToastService} from './toast.service';

function t(str) {
  return str;
}

t('');

@Injectable()
export class TradesCacheService {

  trades = [];

  constructor(private toast: ToastService, private translate: TranslateService, private tradesDAO: TradesDAO) {
  }

  init() {
    this.refresh();
    setInterval(() => this.refresh(), 60 * 1000);
  }

  refresh() {
    this.tradesDAO.query()
      .then((result: any) => {
        this.trades = result.trades;
      })
      .catch(() => {
        this.toast.show('TOAST.TRADES.CANT_FETCH_DATA', 'error');
      });
  }

  list() {
    return this.trades
  }
}
