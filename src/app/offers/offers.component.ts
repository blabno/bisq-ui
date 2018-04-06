import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffersDAO} from "../shared/DAO/offers.dao";
import {ToastService} from "../shared/services/toast.service";
import _ from 'lodash';
import {MarketPriceService} from '../shared/services/marketPrice.service';

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html'
})
export class OffersComponent implements OnInit, OnDestroy {

  listType: 'sell' | 'buy' | 'my-offers';
  offerList = [];
  currencyPairs = [];
  prices = [];
  private paramSubscribe: any;
  public loading = false;

  constructor(private activeRoute: ActivatedRoute,
              private offersDAO: OffersDAO,
              private toast: ToastService,
              private marketPriceService: MarketPriceService) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.refreshOffersList();
      this.listType = params['type'];
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  refreshOffersList() {
    this.loading = true;
    this.offersDAO.query().then(res => {
      this.offerList = res['offers'];
      let currencyPairs = _.map(this.offerList, offer => {
        let {baseCurrencyCode, counterCurrencyCode} = offer;
        return baseCurrencyCode + '_' + counterCurrencyCode;
      });
      this.currencyPairs = _.uniq(currencyPairs);
      let promises = _.map(this.currencyPairs, (val) => this.marketPriceService.getByCode(val));
      return Promise.all(promises);
    }).then((marketPrices) => {
      this.prices = _.zipObject(this.currencyPairs, marketPrices);
      this.loading = false;
    }).catch(error => {
      this.toast.error(error, 'TOAST.OFFERS.CANT_FETCH_DATA');
      this.loading = false;
    });
  }
}
