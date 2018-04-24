import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';

import t from '../../shared/defineTextToTranslate';

t([
  'TOAST.EXIT_APP',
  'TOAST.FORM_VALIDATION_ERROR',
  'TOAST.MARKET.FETCH_DATA_ERROR',
  'TOAST.NOMINATED_SUCCESSFULLY',
  'TOAST.PAYMENT_METHOD_CREATED',
  'TOAST.PAYMENT_METHOD_CREATE_ERROR',
  'TOAST.PAYMENT_METHOD_DELETED',
  'TOAST.PAYMENT_METHOD_DELETE_ERROR',
  'TOAST.OFFERS.CANT_FETCH_DATA',
  'TOAST.OFFERS.LIST.DELETED',
  'TOAST.OFFERS.LIST.DELETE_ERROR',
  'TOAST.TRADES.CANT_FETCH_DATA',
  'TOAST.NEW_ADDRESS_CREATE_ERROR',
  'TOAST.SOMETHING_WENT_WRONG'
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

  error(error, defaultMessage?) {
    if (_.has(error, 'error.errors')) {
      this.show(error.error.errors.join('. '), 'error');
    } else {
      this.show(defaultMessage || 'TOAST.SOMETHING_WENT_WRONG', 'error');
    }
  }
}
