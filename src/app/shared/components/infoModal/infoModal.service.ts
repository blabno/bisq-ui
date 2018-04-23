import _ from 'lodash';
import {Injectable, OnDestroy} from '@angular/core';
import {ModalController} from 'ionic-angular';

import {InfoModalComponent} from './infoModal.component';

import {BackButtonService} from '../../services/backButton.service';

@Injectable()
export class InfoModalService implements OnDestroy {

  private modalCtrlInstance;
  private unregisterBackButton = _.noop;

  constructor(private modalCtrl: ModalController,
              private backButton: BackButtonService) {
  }

  ngOnDestroy() {
    this.unregisterBackButton();
  }

  show(params) {
    setTimeout(() => {
      const isHidden = _.chain(localStorage.getItem('hiddenModals'))
        .split(',')
        .includes(params.id)
        .value();
      if (!isHidden) {
        this.modalCtrlInstance = this.modalCtrl.create(InfoModalComponent, params, {enableBackdropDismiss: !params.disallowCancel});
        if (!params.disallowCancel) {
          this.unregisterBackButton = this.backButton.register(() => {
            this.unregisterBackButton();
            return this.modalCtrlInstance.dismiss();
          });
        }
        this.modalCtrlInstance.present();
      }
    }, 0);
  }
}
