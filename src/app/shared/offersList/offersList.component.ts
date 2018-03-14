import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offersList.component.html'
})
export class OffersListComponent implements OnInit {

  @Input() data: Array<Object>;
  @Input() type: string;
  @Output() onSelect = new EventEmitter<any>();

  list;

  constructor() {
  }

  ngOnInit() {
    this.list = this.data;
  }

  select(id) {
    this.onSelect.emit(id);
  }
}
