import {Component} from '@angular/core';

@Component({
  selector: 'app-open-trades',
  templateUrl: 'openTrades.component.html'
})
export class OpenTradesComponent {
  isListVisible = true;
  selectedTrade;

  constructor() {
  }

  selectTrade(trade) {
    this.selectedTrade = trade;
    this.isListVisible = false;
  }

  cancel() {
    this.isListVisible = true;
  }
}
