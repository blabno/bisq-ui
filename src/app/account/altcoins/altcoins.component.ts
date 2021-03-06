import {Component} from '@angular/core';
import _ from 'lodash';

import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {ToastService} from '../../shared/services/toast.service';
import formSchema from './altcoints.form';
import {translate} from './altcoins.translation';

translate();

@Component({
  selector: 'app-altcoins',
  templateUrl: 'altcoins.component.html'
})
export class AltcoinsComponent {
  formSchema = formSchema;

  constructor(private paymentAccountsDAO: PaymentAccountsDAO,
              private toast: ToastService) {
  }

  list() {
    return this.paymentAccountsDAO.query()
      .then((result: any) => _.filter(result.paymentAccounts, item => 'BLOCK_CHAINS' === item.paymentMethod))
      .catch(error => this.toast.error(error, 'TOAST.PAYMENT_METHOD_QUERY_ERROR'))
  }

  create(values) {
    const payload = _.cloneDeep(values);
    payload.paymentMethod = 'BLOCK_CHAINS';
    payload.selectedTradeCurrency = payload.tradeCurrencies;
    payload.tradeCurrencies = [payload.tradeCurrencies];
    delete payload.salt;
    delete payload.limitations;
    return this.paymentAccountsDAO.create(payload);
  }

  remove(id) {
    return this.paymentAccountsDAO.delete(id)
  }
}
