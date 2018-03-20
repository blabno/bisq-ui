import {Component, OnInit, OnDestroy} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';

import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {ToastService} from '../../shared/services/toast.service';

function t(str) {
  return str;
}

t('ACCOUNT.CURRENCY.PAYMENT_METHOD');
t('ACCOUNT.CURRENCY.OWNER_NAME');
t('ACCOUNT.CURRENCY.BANK_COUNTRY');
t('ACCOUNT.CURRENCY.COUNTRY_PL');
t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO');
t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO');
t('ACCOUNT.CURRENCY.LIMITATION_SEPA');
t('ACCOUNT.CURRENCY.LIMITATION_VENMO');
t('ACCOUNT.CURRENCY.LIMITATIONS');
t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE');
t('ACCOUNT.CURRENCY.ACCOUNT_NAME');
t('ACCOUNT.CURRENCY.VENMO_NAME');
t('ACCOUNT.CURRENCY.CURRENCY');
t('ACCOUNT.CURRENCY.CURRENCY_USD');
t('ACCOUNT.CURRENCY.CURRENCY_PLN');
t('ACCOUNT.CURRENCY.DELETE_CONFIRMATION');

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit, OnDestroy {
  paymentForm = {
    paymentMethod: {
      type: 'select', label: 'ACCOUNT.CURRENCY.PAYMENT_METHOD',
      options: [
        {value: 'SEPA', label: 'SEPA'},
        {value: 'Venmo', label: 'Venmo'}
      ]
    },
  };
  sepaForm = {
    holderName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.OWNER_NAME',
      validators: ['required']
    },
    iban: {
      type: 'text', label: 'IBAN',
      validators: ['required', 'iban']
    },
    bic: {
      type: 'text', label: 'BIC',
      validators: ['required', 'bic']
    },
    countryCode: {
      type: 'select', label: 'ACCOUNT.CURRENCY.BANK_COUNTRY',
      options: [{value: 'PL', label: 'ACCOUNT.CURRENCY.COUNTRY_PL'}],
      validators: ['required']
    },
    selectedTradeCurrency: {
      type: 'select', label: 'ACCOUNT.CURRENCY.CURRENCY',
      value: 'PLN',
      options: [
        {value: 'USD', label: 'ACCOUNT.CURRENCY.CURRENCY_USD'},
        {value: 'PLN', label: 'ACCOUNT.CURRENCY.CURRENCY_PLN'}
      ],
      disabled: true,
    },
    tradesEuro: {
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO',
      multiple: true,
      options: [
        {value: 'at', label: 'AT'},
        {value: 'be', label: 'BE'},
        {value: 'cy', label: 'CY'},
        {value: 'ee', label: 'EE'},
        {value: 'fi', label: 'FI'},
        {value: 'fr', label: 'FR'},
        {value: 'gr', label: 'GR'},
        {value: 'es', label: 'ES'},
        {value: 'nl', label: 'NL'},
        {value: 'ie', label: 'IE'},
        {value: 'lt', label: 'LT'},
        {value: 'lu', label: 'LU'},
        {value: 'mt', label: 'MT'},
        {value: 'mc', label: 'MC'},
        {value: 'de', label: 'DE'},
        {value: 'pt', label: 'PT'},
        {value: 'sk', label: 'SK'},
        {value: 'si', label: 'SI'},
        {value: 'it', label: 'IT'},
        {value: 'lv', label: 'LV'}
      ]
    },
    tradesNonEuro: {
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO',
      multiple: true,
      options: [
        {value: 'bg', label: 'BG'},
        {value: 'hr', label: 'HR'},
        {value: 'dk', label: 'DK'},
        {value: 'is', label: 'IS'},
        {value: 'li', label: 'LI'},
        {value: 'no', label: 'NO'},
        {value: 'pl', label: 'PL'},
        {value: 'cz', label: 'CZ'},
        {value: 'ro', label: 'RO'},
        {value: 'ch', label: 'CH'},
        {value: 'se', label: 'SE'},
        {value: 'gb', label: 'GB'},
        {value: 'hu', label: 'HU'}
      ]
    },
    salt: {type: 'text', label: 'ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE'},
    accountName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.ACCOUNT_NAME',
      validators: ['required']
    },
    limitations: {
      type: 'footer', label: 'ACCOUNT.CURRENCY.LIMITATIONS',
      text: 'ACCOUNT.CURRENCY.LIMITATION_SEPA'
    }
  };
  venmoForm = {
    holderName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.OWNER_NAME',
      validators: ['required']
    },
    venmoName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.VENMO_NAME',
      validators: ['required']
    },
    selectedTradeCurrency: {
      type: 'select', label: 'ACCOUNT.CURRENCY.CURRENCY',
      value: 'USD',
      options: [
        {value: 'USD', label: 'ACCOUNT.CURRENCY.CURRENCY_USD'}
      ],
      disabled: true,
    },
    salt: {type: 'text', label: 'ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE'},
    accountName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.ACCOUNT_NAME',
      validators: ['required']
    },
    limitations: {
      type: 'footer', label: 'ACCOUNT.CURRENCY.LIMITATIONS',
      text: 'ACCOUNT.CURRENCY.LIMITATION_VENMO'
    }
  };

  formOpened: boolean;
  formDisabled: boolean;
  selectedForm: string;
  accounts = [];
  paymentValues = {};
  detailsValues = {id: ''};
  unregisterBackButton = _.noop;

  constructor(private translate: TranslateService,
              private paymentAccountsDAO: PaymentAccountsDAO,
              private toast: ToastService,
              private platform: Platform,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.paymentAccountsDAO.query().then((result: any) => (this.accounts = result.paymentAccounts));

  }

  ngOnDestroy() {
    this.unregisterBackButton();
  }

  registerBackButton() {
    this.unregisterBackButton = this.platform.registerBackButtonAction(() => {
      this.cancel();
      this.unregisterBackButton();
    });
  }

  show(index) {
    this.paymentValues = {paymentMethod: this.accounts[index].paymentMethod};
    this.detailsValues = this.accounts[index];
    this.selectedForm = this.accounts[index].paymentMethod;
    this.formDisabled = true;
    this.formOpened = true;
    this.registerBackButton();
  }

  addNew() {
    this.cancel();
    this.formOpened = true;
    this.registerBackButton();
  }

  cancel() {
    this.formOpened = false;
    this.formDisabled = false;
    this.selectedForm = null;
    this.paymentValues = _.mapValues(this.paymentValues, () => null);
    this.detailsValues = _.mapValues(this.detailsValues, () => null);
    this.unregisterBackButton();
  }

  refreshList() {
    return this.paymentAccountsDAO.query()
      .then((result: any) => (this.accounts = result.paymentAccounts))
  }

  change(form) {
    this.selectedForm = form.value.paymentMethod
  }

  submit(values) {
    const payload = _.pick(values, ['holderName', 'iban', 'bic', 'accountName', 'countryCode', 'selectedTradeCurrency', 'accountName']);
    payload.paymentMethod = this.selectedForm;
    payload.tradeCurrencies = ['PLN'];
    this.paymentAccountsDAO.create(payload)
      .then(() => {
        this.cancel();
        this.refreshList();
        this.toast.show('TOAST.PAYMENT_METHOD_CREATED', 'info');
      })
      .catch(() => {
        this.toast.show('TOAST.PAYMENT_METHOD_CREATE_ERROR', 'error');
      });
  }

  delete() {
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: this.translate.instant('ACCOUNT.CURRENCY.DELETE_CONFIRMATION'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('CONFIRM'),
          handler: () => {
            this.paymentAccountsDAO.delete(this.detailsValues.id)
              .then(() => {
                this.cancel();
                this.refreshList();
                this.toast.show('TOAST.PAYMENT_METHOD_DELETED', 'info');
              })
              .catch(() => {
                this.toast.show('TOAST.PAYMENT_METHOD_DELETE_ERROR', 'error');
              });
          }
        }
      ]
    }).present()
  }

}
