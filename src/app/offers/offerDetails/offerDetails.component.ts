import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import _ from 'lodash';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offerDetails.component.html'
})
export class OfferDetailsComponent {
  offer;

  constructor(private viewCtrl: ViewController, public params: NavParams) {
    this.offer = params.data;
  }

  takeOffer() {
    this.offer.takeOffer(this.params.data);
    this.dismiss();
  }

  deleteOffer() {
    this.offer.deleteOffer(this.params.data);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getOfferMarketPriceMargin(item) {
    return _.round(item.marketPriceMargin * 100, 2);
  }
}
