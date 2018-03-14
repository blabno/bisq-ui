import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffersDAO} from "../shared/DAO/offers.dao";

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html'
})
export class OffersComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: ActivatedRoute, private offersDAO: OffersDAO) {
  }

  offerList = [];

  private paramSubscribe: any;
  listType: 'sell' | 'buy';

  ngOnInit() {
    this.offersDAO.query().then(res => {
      this.offerList = res['offers'];
      this.paramSubscribe = this.activeRoute.params.subscribe(params => {
        this.listType = params['type'];
      });
    });

  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onSelect(id) {
  }
}
