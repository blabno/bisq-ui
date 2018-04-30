import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffersDAO} from "../shared/DAO/offers.dao";
import {ToastService} from "../shared/services/toast.service";
import _ from 'lodash';
import {MarketPriceService} from '../shared/services/marketPrice.service';
import {SettingsService} from "../shared/services/settings.service";

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html'
})
export class OffersComponent implements OnInit, OnDestroy {

  listType: 'sell' | 'buy' | 'my-offers';
  offerList = [];
  currencyCodes = [];
  prices = [];
  private paramSubscribe: any;
  public loading = false;

  constructor(private activeRoute: ActivatedRoute,
              private offersDAO: OffersDAO,
              private toast: ToastService,
              private marketPriceService: MarketPriceService,
              private settings: SettingsService) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      if (this.settings.backendUrl) {
        this.refreshOffersList();
      }
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
      let baseCurrencyCodes = _.map(this.offerList, 'baseCurrencyCode');
      let currencyCodes = _.map(this.offerList, 'currencyCode');
      let counterCurrencyCodes = _.map(this.offerList, 'counterCurrencyCode');

      this.currencyCodes = _.uniq([...baseCurrencyCodes, ...currencyCodes, ...counterCurrencyCodes]);
      return this.marketPriceService.getMarketPrices(true, this.currencyCodes);
    }).then(marketPrices => {
      this.prices = marketPrices;
      this.loading = false;
    }).catch(error => {
      this.toast.error(error, 'TOAST.OFFERS.CANT_FETCH_DATA');
      this.loading = false;
    });
  }
}
