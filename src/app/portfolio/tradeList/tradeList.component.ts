import _ from 'lodash';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ToastService} from "../../shared/services/toast.service";
import {TradesCacheService} from '../../shared/services/tradesCache.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: 'tradeList.component.html'
})
export class TradeListComponent implements OnInit, OnDestroy {
  stepsMap;
  trades = [];
  total = 0;
  loading = true;
  listType: 'history' | 'open-trades';
  onListChange;
  routePathSubscribe;
  exportingHistory: boolean = false;

  constructor(private tradesCache: TradesCacheService,
              private activatedRoute: ActivatedRoute,
              private toast:ToastService) {
  }

  ngOnInit() {
    this.routePathSubscribe = this.activatedRoute.url.subscribe((value) => {
      this.listType = _.get(value, '[1].path');
      if ('open-trades' === this.listType) {
        this.tradesCache.refresh();
        this.onListChange = this.tradesCache.onListChange.subscribe(() => {
          this.init();
        });
      } else if ('history' === this.listType) {
        // Todo: after create API for history get historical trades
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.onListChange) {
      this.onListChange.unsubscribe();
    }
    this.routePathSubscribe.unsubscribe();
  }

  init() {
    this.stepsMap = this.tradesCache.stepsMap;
    this.tradesCache.list()
      .then(result => {
        this.trades = result;
        this.total = this.trades.length;
        this.loading = false;
      });
  }

  exportHistory() {
    if (this.exportingHistory) {
      return;
    }
    this.exportingHistory = true;
    this.toast.show('SHARED.NOT_DONE_YET', 'info');
    setTimeout(() => this.exportingHistory = false, 1000);
  }
}
