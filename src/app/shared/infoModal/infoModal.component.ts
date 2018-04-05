import _ from 'lodash';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavParams, ViewController} from 'ionic-angular';

import t from '../../shared/defineTextToTranslate';

t('INFO_MODAL.DO_NOT_SHOW_AGAIN');

@Component({
  selector: 'app-info-modal',
  templateUrl: './infoModal.component.html'
})
export class InfoModalComponent {
  data;
  id;
  doNotShowButton;
  redirectButton;
  disallowCancel;

  constructor(private viewCtrl: ViewController, public params: NavParams, private router: Router) {
    this.data = {
      title: params.data.title,
      text: params.data.text,
      translateParams: params.data.translateParams
    };
    this.id = params.data.id;
    this.doNotShowButton = params.data.doNotShowButton;
    this.redirectButton = params.data.redirectButton;
    this.disallowCancel = params.data.disallowCancel;
  }

  redirect() {
    this.router.navigateByUrl(this.redirectButton.path);
    this.viewCtrl.dismiss();
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
