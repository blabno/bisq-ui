import * as _ from 'lodash';
import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offersList.component.html'
})
export class OffersListComponent implements OnChanges {

  @Input() data: Array<Object>;
  @Input() type: 'sell' | 'buy';
  @Output() onSelect = new EventEmitter<any>();

  list = [];
  currencyFilter=null;
  currencies = [
    null,
    'USD',
    'PLN',
    'BTC',
    'DASH',
    'ETH'
  ];

  ngOnChanges() {
    this.filterData();
  }

  onCurrencyFilterChange(){
   this.filterData();
  }

  private filterData(){
    if (this.data && this.type) {
      const dir = this.type === 'sell' ? 'buy' : 'sell'; // Todo: check... probably server returns opposite directions
      const filter = {direction: dir.toUpperCase()};
      if(this.currencyFilter){
        _.set(filter, 'other_currency', this.currencyFilter);
      }
      this.list = _.filter(this.data, filter);
    }
  }

  getOfferBTCAmount(item) {
    if (item.min_btc_amount === false || Number(item.min_btc_amount) != Number(item.btc_amount)) {
      return item.min_btc_amount + ' - ' + item.btc_amount;
    }
    return item.btc_amount;
  }

  getOfferAmount(item) {
    if (item.min_btc_amount === false || Number(item.min_btc_amount) != Number(item.btc_amount)) {
      return _.round(Number(item.min_btc_amount) * Number(item.other_amount), 2) + ' - ' +
        _.round(Number(item.btc_amount) * Number(item.other_amount), 2);
    }
    return _.round(Number(item.btc_amount) * Number(item.other_amount), 2);
  }

  select(id) {
    this.onSelect.emit(id);
  }
}
