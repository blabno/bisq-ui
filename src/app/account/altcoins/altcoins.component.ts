import {Component} from '@angular/core';
import _ from 'lodash';

import formSchema from './altcoints.form';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {translate} from './altcoins.translation';

translate();

@Component({
  selector: 'app-altcoins',
  templateUrl: 'altcoins.component.html'
})
export class AltcoinsComponent {

  formSchema = formSchema;

  constructor(private paymentAccountsDAO: PaymentAccountsDAO) {
  }

  list() {
    return this.paymentAccountsDAO.query()
      .then((result: any) => _.filter(result.paymentAccounts, item => 'BLOCK_CHAINS' === item.paymentMethod))
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
