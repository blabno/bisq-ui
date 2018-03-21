import {Injectable} from '@angular/core';
import {ModalController} from 'ionic-angular';
import _ from 'lodash';

import {InfoModalComponent} from './infoModal.component';

@Injectable()
export class InfoModalService {

  constructor(private modalCtrl: ModalController) {
  }

  show(params) {
    setTimeout(() => {
      const isHidden = _.chain(localStorage.getItem('hiddenModals'))
        .split(',')
        .includes(params.id)
        .value();
      if (!isHidden) {
        this.modalCtrl.create(InfoModalComponent, params).present();
      }
    }, 0);
  }
}
