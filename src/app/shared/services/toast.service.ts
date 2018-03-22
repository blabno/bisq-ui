import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

import t from '../../shared/defineTextToTranslate';

t([
  'TOAST.FORM_VALIDATION_ERROR',
  'TOAST.PAYMENT_METHOD_CREATED',
  'TOAST.PAYMENT_METHOD_CREATE_ERROR',
  'TOAST.PAYMENT_METHOD_DELETED',
  'TOAST.PAYMENT_METHOD_DELETE_ERROR',
  'TOAST.OFFERS.CANT_FETCH_DATA',
  'TOAST.TRADES.CANT_FETCH_DATA'
]);

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController, private translate: TranslateService) {
  }

  show(message, type) {
    this.translate.get(message).subscribe((text) => {
      this.toastCtrl.create({
        message: text,
        cssClass: type,
        duration: 3000
      }).present();
    });
  }
}
