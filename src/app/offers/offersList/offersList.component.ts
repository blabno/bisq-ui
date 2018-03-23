import _ from 'lodash';
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
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
  public currencyFilter = this.NO_FILTER;
  public list = [];
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

  onCurrencyFilterChange(e) {
    this.filterData();
    this.settings.selectedCurrencyOnOfferList = e;
    this.settings.saveSettings();
  }

  getOfferBTCAmount(item) {
    if (item.minAmount === false || Number(item.minAmount) != Number(item.amount)) {
      return item.minAmount / 100000000 + ' - ' + item.amount / 100000000;
    }
    return item.amount / 100000000;
  }

  getOfferAmount(item) {
    let amount = Number(item.amount) / 100000000;
    let price = Number(item.price) / 100000000;
    if (!item.minAmount || Number(item.minAmount) != Number(item.amount)) {
      let minAmount = Number(item.minAmount) / 100000000;
      return _.round(minAmount * price, 2) + ' - ' + _.round(amount * price, 2);
    }
    return _.round(amount * price, 2);
  }

  select(id) {
    this.onSelect.emit(id);
  }

  private filterData() {
    if (this.data && this.type) {
      const dir = this.type === 'sell' ? 'buy' : 'sell';
      const filter = {direction: dir.toUpperCase()};
      if (this.currencyFilter !== this.NO_FILTER) {
        _.set(filter, 'currencyCode', this.currencyFilter);
      }
      this.list = _.filter(this.data, filter);
    }
  }
}
