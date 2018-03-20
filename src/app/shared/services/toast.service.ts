import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

function t(str) {
  return str;
}

t('TOAST.FORM_VALIDATION_ERROR');
t('TOAST.PAYMENT_METHOD_CREATED');
t('TOAST.PAYMENT_METHOD_CREATE_ERROR');
t('TOAST.PAYMENT_METHOD_DELETED');
t('TOAST.PAYMENT_METHOD_DELETE_ERROR');
t('TOAST.OFFERS.CANT_FETCH_DATA');
t('TOAST.TRADES.CANT_FETCH_DATA');

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
