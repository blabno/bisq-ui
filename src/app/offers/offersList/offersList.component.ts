import * as _ from 'lodash';
import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {SettingsService} from '../../shared/services/settings.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offersList.component.html'
})
export class OffersListComponent implements OnChanges {

  @Input() data: Array<Object>;
  @Input() type: 'sell' | 'buy';
  @Output() onSelect = new EventEmitter<any>();

  public NO_FILTER = 'NONE';
  public list = [];
  public currencyFilter= this.NO_FILTER;
  public currencies = [
    {value: 'USD', name: 'USD'},
    {value: 'PLN', name: 'PLN'},
    {value: 'BTC', name: 'BTC'},
    {value: 'DASH', name: 'DASH'},
    {value: 'ETH', name: 'ETH'}
  ];

  constructor(public settings: SettingsService) {
    this.currencyFilter = settings.selectedCurrencyOnOfferList;
  }

  ngOnChanges() {
    this.filterData();
  }

  onCurrencyFilterChange(e){
    this.filterData();
    this.settings.selectedCurrencyOnOfferList = e;
    this.settings.saveSettings();
  }

  private filterData(){
    if (this.data && this.type) {
      const dir = this.type === 'sell' ? 'buy' : 'sell'; // Todo: check... probably server returns opposite directions
      const filter = {direction: dir.toUpperCase()};
      if(this.currencyFilter !== this.NO_FILTER){
        _.set(filter, 'currencyCode', this.currencyFilter);
      }
      this.list = _.filter(this.data, filter);
    }
  }

  getOfferBTCAmount(item) {
    if (item.minAmount === false || Number(item.minAmount) != Number(item.amount)) {
      return item.minAmount + ' - ' + item.amount;
    }
    return item.amount;
  }

  getOfferAmount(item) {
    if (item.minAmount === false || Number(item.minAmount) != Number(item.amount)) {
      return _.round(Number(item.minAmount) * Number(item.price), 2) + ' - ' +
        _.round(Number(item.amount) * Number(item.price), 2);
    }
    return _.round(Number(item.amount) * Number(item.price), 2);
  }

  select(id) {
    this.onSelect.emit(id);
  }
}
