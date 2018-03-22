import _ from 'lodash';
import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import t from '../../shared/defineTextToTranslate';

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
