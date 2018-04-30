import _ from 'lodash';
import moment from 'moment';
import Promise from 'bluebird';
import {Component} from '@angular/core';

import {MarketDAO} from '../../shared/DAO/market.dao';
import {ToastService} from '../../shared/services/toast.service';

import defineTextToTranslate from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-market-trades',
  templateUrl: 'trades.component.html'
})
export class TradesComponent {

  public data: any;
  public currencyFilter: string;
  public interval: moment.unitOfTime.DurationConstructor;
  public supportedPaymentsCurrencies: Array<Object>;
  public supportedIntervals: Array<Object>;
  public noData: boolean = false;
  public loading: boolean = false;
  public trades: Array<Object>;

  constructor(private marketDAO: MarketDAO,
              private toast: ToastService) {
    this.supportedIntervals = [
      {
        label: defineTextToTranslate('MARKET.TRADE.INTERVAL.DAY'),
        value: 'day'
      },
      {
        label: defineTextToTranslate('MARKET.TRADE.INTERVAL.WEEK'),
        value: 'week'
      },
      {
        label: defineTextToTranslate('MARKET.TRADE.INTERVAL.MONTH'),
        value: 'month'
      },
      {
        label: defineTextToTranslate('MARKET.TRADE.INTERVAL.YEAR'),
        value: 'year'
      },
    ];
  }

  ngOnInit() {
    this.marketDAO.getAvailableMarkets().then((res: any) => {
      this.supportedPaymentsCurrencies = _.chain(res).filter(o => o.lsymbol === 'BTC' && o.rtype === 'fiat').value();
    });
    this.interval = 'day';
  }

  private parseKnowNumberValues(d) {
    return _.map(d, value => {
      value['amount'] = Number(value['amount']);
      value['price'] = Number(value['price']);
      return value;
    });
  }

  onFilterChange() {
    if (this.currencyFilter && this.interval) {
      this.noData = false;
      this.loading = true;
      const market = `btc_${this.currencyFilter.toLowerCase()}`;
      const from = moment().add(-15, this.interval).unix();
      Promise.props({
        boxPlotChartData: this.marketDAO.getPrices(market, this.interval, from),
        volumes: this.marketDAO.getVolumes(market, this.interval, from),
        trades: this.marketDAO.getLastTrades(market)
      }).then((res: any) => {
        if (!_.get(res, 'boxPlotChartData.length')) {
          this.noData = true;
        }
        this.data = {
          ...res,
          currency: this.currencyFilter
        };
        this.trades = this.parseKnowNumberValues(res.trades);
        this.loading = false;
      }).catch(error => {
        this.data = null;
        this.toast.error(error, 'TOAST.MARKET.FETCH_DATA_ERROR');
        this.loading = false;
      });
    }
  }
}
