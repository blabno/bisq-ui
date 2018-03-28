import _ from 'lodash';
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
  private daoInterval: any;
  public loading = false;

  constructor(private activeRoute: ActivatedRoute, private offersDAO: OffersDAO, private toast: ToastService) {
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.listType = params['type'];
    });
    this.refreshOffersList();
    this.daoInterval = setInterval(() => this.refreshOffersList(), 10 * 1000); //10 second
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
    clearInterval(this.daoInterval);
  }

  private refreshOffersList() {
    this.loading = true;
    this.offersDAO.query().then(res => {
      this.offerList = res['offers'];
      this.loading = false;
    }).catch(() => {
      this.toast.show('TOAST.OFFERS.CANT_FETCH_DATA', 'error');
      this.loading = false;
    });
  }
}
