import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffersDAO} from "../shared/DAO/offers.dao";
import {ToastService} from "../shared/services/toast.service";

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html'
})
export class OffersComponent implements OnInit, OnDestroy {

  listType: 'sell' | 'buy';
  offerList = [];
  private paramSubscribe: any;

  constructor(private activeRoute: ActivatedRoute, private offersDAO: OffersDAO, private toast: ToastService) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.listType = params['type'];
    });
    this.refreshOffersList();
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  private refreshOffersList() {
    this.offersDAO.query().then(res => {
      this.offerList = res['offers'];
    }).catch(() => {
      this.toast.show('TOAST.OFFERS.CANT_FETCH_DATA', 'error');
    });
  }
}
