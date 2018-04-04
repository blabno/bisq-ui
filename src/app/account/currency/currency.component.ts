import {Component, OnInit} from '@angular/core';
import _ from 'lodash';

import {InfoModalService} from '../../shared/infoModal/infoModal.service';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {ToastService} from '../../shared/services/toast.service';
import formSchema from './currency.form';
import {translate} from './currency.translation';

translate();

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit {
  formSchema = formSchema;

  constructor(private initModal: InfoModalService,
              private paymentAccountsDAO: PaymentAccountsDAO,
              private toast: ToastService) {
  }

  ngOnInit() {
    this.initModal.show({
      id: 'accountInit',
      title: 'ACCOUNT.INIT_MODAL.TITLE',
      text: 'ACCOUNT.INIT_MODAL.TEXT',
      doNotShowButton: true
    });
  }

  list() {
    return this.paymentAccountsDAO.query()
      .then((result: any) => _.filter(result.paymentAccounts, item => 'BLOCK_CHAINS' !== item.paymentMethod))
      .catch(() => this.toast.show('TOAST.PAYMENT_METHOD_QUERY_ERROR', 'error'))
  }

  create(values) {
    const payload = _.cloneDeep(values);
    if ('SEPA' === payload.paymentMethod || 'SEPA_INSTANT' === payload.paymentMethod) {
      payload.acceptedCountries = _.concat(payload.acceptedCountriesEuro, payload.acceptedCountriesNonEuro);
      delete payload.acceptedCountriesEuro;
      delete payload.acceptedCountriesNonEuro;
    }
    if ('SPECIFIC_BANKS' === payload.paymentMethod) {
      payload.acceptedBanks = _.split(payload.acceptedBanks, ', ');
    }
    payload.tradeCurrencies = _.flatten([payload.tradeCurrencies]);
    payload.selectedTradeCurrency = payload.tradeCurrencies[0];
    delete payload.salt;
    delete payload.limitations;
    return this.paymentAccountsDAO.create(payload);
  }

  remove(id) {
    return this.paymentAccountsDAO.delete(id)
  }
}
