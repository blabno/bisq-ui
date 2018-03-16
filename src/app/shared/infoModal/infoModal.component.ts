import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';
import _ from 'lodash';

function t(str) {
  return str;
}

t('INFO_MODAL.DO_NOT_SHOW_AGAIN');

@Component({
  selector: 'app-info-modal',
  templateUrl: './infoModal.component.html'
})
export class InfoModalComponent {
  id;
  data;

  constructor(private viewCtrl: ViewController, public params: NavParams) {
    this.id = params.data.id;
    this.data = params.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  dismissPermanently() {
    this.dismiss();
    localStorage.setItem('hiddenModals', _.chain(localStorage.getItem('hiddenModals'))
      .split(',')
      .concat(this.id)
      .join(',')
      .value());
  }
}
