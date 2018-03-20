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
t('ACCOUNT.CURRENCY.COUNTRY_AT');
t('ACCOUNT.CURRENCY.COUNTRY_BE');
t('ACCOUNT.CURRENCY.COUNTRY_CY');
t('ACCOUNT.CURRENCY.COUNTRY_EE');
t('ACCOUNT.CURRENCY.COUNTRY_FI');
t('ACCOUNT.CURRENCY.COUNTRY_FR');
t('ACCOUNT.CURRENCY.COUNTRY_GR');
t('ACCOUNT.CURRENCY.COUNTRY_ES');
t('ACCOUNT.CURRENCY.COUNTRY_NL');
t('ACCOUNT.CURRENCY.COUNTRY_IE');
t('ACCOUNT.CURRENCY.COUNTRY_LT');
t('ACCOUNT.CURRENCY.COUNTRY_LU');
t('ACCOUNT.CURRENCY.COUNTRY_MT');
t('ACCOUNT.CURRENCY.COUNTRY_MC');
t('ACCOUNT.CURRENCY.COUNTRY_DE');
t('ACCOUNT.CURRENCY.COUNTRY_PT');
t('ACCOUNT.CURRENCY.COUNTRY_SK');
t('ACCOUNT.CURRENCY.COUNTRY_SI');
t('ACCOUNT.CURRENCY.COUNTRY_IT');
t('ACCOUNT.CURRENCY.COUNTRY_LV');
t('ACCOUNT.CURRENCY.COUNTRY_BG');
t('ACCOUNT.CURRENCY.COUNTRY_HR');
t('ACCOUNT.CURRENCY.COUNTRY_DK');
t('ACCOUNT.CURRENCY.COUNTRY_IS');
t('ACCOUNT.CURRENCY.COUNTRY_LI');
t('ACCOUNT.CURRENCY.COUNTRY_NO');
t('ACCOUNT.CURRENCY.COUNTRY_PL');
t('ACCOUNT.CURRENCY.COUNTRY_CZ');
t('ACCOUNT.CURRENCY.COUNTRY_RO');
t('ACCOUNT.CURRENCY.COUNTRY_CH');
t('ACCOUNT.CURRENCY.COUNTRY_SE');
t('ACCOUNT.CURRENCY.COUNTRY_GB');
t('ACCOUNT.CURRENCY.COUNTRY_HU');
t('ACCOUNT.CURRENCY.CURRENCY');
t('ACCOUNT.CURRENCY.CURRENCY_EUR');
t('ACCOUNT.CURRENCY.CURRENCY_BGN');
t('ACCOUNT.CURRENCY.CURRENCY_DKK');
t('ACCOUNT.CURRENCY.CURRENCY_ISK');
t('ACCOUNT.CURRENCY.CURRENCY_CHF');
t('ACCOUNT.CURRENCY.CURRENCY_NOK');
t('ACCOUNT.CURRENCY.CURRENCY_PLN');
t('ACCOUNT.CURRENCY.CURRENCY_CZK');
t('ACCOUNT.CURRENCY.CURRENCY_RON');
t('ACCOUNT.CURRENCY.CURRENCY_SEK');
t('ACCOUNT.CURRENCY.CURRENCY_HUF');
t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO');
t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO');
t('ACCOUNT.CURRENCY.LIMITATION_SEPA');
t('ACCOUNT.CURRENCY.LIMITATION_VENMO');
t('ACCOUNT.CURRENCY.LIMITATIONS');
t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE');
t('ACCOUNT.CURRENCY.ACCOUNT_NAME');
t('ACCOUNT.CURRENCY.VENMO_NAME');
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
      options: [
        {value: 'AT', label: 'ACCOUNT.CURRENCY.COUNTRY_AT'},
        {value: 'BE', label: 'ACCOUNT.CURRENCY.COUNTRY_BE'},
        {value: 'CY', label: 'ACCOUNT.CURRENCY.COUNTRY_CY'},
        {value: 'EE', label: 'ACCOUNT.CURRENCY.COUNTRY_EE'},
        {value: 'FI', label: 'ACCOUNT.CURRENCY.COUNTRY_FI'},
        {value: 'FR', label: 'ACCOUNT.CURRENCY.COUNTRY_FR'},
        {value: 'GR', label: 'ACCOUNT.CURRENCY.COUNTRY_GR'},
        {value: 'ES', label: 'ACCOUNT.CURRENCY.COUNTRY_ES'},
        {value: 'NL', label: 'ACCOUNT.CURRENCY.COUNTRY_NL'},
        {value: 'IE', label: 'ACCOUNT.CURRENCY.COUNTRY_IE'},
        {value: 'LT', label: 'ACCOUNT.CURRENCY.COUNTRY_LT'},
        {value: 'LU', label: 'ACCOUNT.CURRENCY.COUNTRY_LU'},
        {value: 'MT', label: 'ACCOUNT.CURRENCY.COUNTRY_MT'},
        {value: 'MC', label: 'ACCOUNT.CURRENCY.COUNTRY_MC'},
        {value: 'DE', label: 'ACCOUNT.CURRENCY.COUNTRY_DE'},
        {value: 'PT', label: 'ACCOUNT.CURRENCY.COUNTRY_PT'},
        {value: 'SK', label: 'ACCOUNT.CURRENCY.COUNTRY_SK'},
        {value: 'SI', label: 'ACCOUNT.CURRENCY.COUNTRY_SI'},
        {value: 'IT', label: 'ACCOUNT.CURRENCY.COUNTRY_IT'},
        {value: 'LV', label: 'ACCOUNT.CURRENCY.COUNTRY_LV'},
        {value: 'BG', label: 'ACCOUNT.CURRENCY.COUNTRY_BG'},
        {value: 'HR', label: 'ACCOUNT.CURRENCY.COUNTRY_HR'},
        {value: 'DK', label: 'ACCOUNT.CURRENCY.COUNTRY_DK'},
        {value: 'IS', label: 'ACCOUNT.CURRENCY.COUNTRY_IS'},
        {value: 'LI', label: 'ACCOUNT.CURRENCY.COUNTRY_LI'},
        {value: 'NO', label: 'ACCOUNT.CURRENCY.COUNTRY_NO'},
        {value: 'PL', label: 'ACCOUNT.CURRENCY.COUNTRY_PL'},
        {value: 'CZ', label: 'ACCOUNT.CURRENCY.COUNTRY_CZ'},
        {value: 'RO', label: 'ACCOUNT.CURRENCY.COUNTRY_RO'},
        {value: 'CH', label: 'ACCOUNT.CURRENCY.COUNTRY_CH'},
        {value: 'SE', label: 'ACCOUNT.CURRENCY.COUNTRY_SE'},
        {value: 'GB', label: 'ACCOUNT.CURRENCY.COUNTRY_GB'},
        {value: 'HU', label: 'ACCOUNT.CURRENCY.COUNTRY_HU'}
      ],
      validators: ['required']
    },
    selectedTradeCurrency: {
      type: 'select', label: 'ACCOUNT.CURRENCY.CURRENCY',
      options: [
        {value: 'EUR', label: 'ACCOUNT.CURRENCY.CURRENCY_EUR'},
        {value: 'BGN', label: 'ACCOUNT.CURRENCY.CURRENCY_BGN'},
        {value: 'DKK', label: 'ACCOUNT.CURRENCY.CURRENCY_DKK'},
        {value: 'ISK', label: 'ACCOUNT.CURRENCY.CURRENCY_ISK'},
        {value: 'CHF', label: 'ACCOUNT.CURRENCY.CURRENCY_CHF'},
        {value: 'NOK', label: 'ACCOUNT.CURRENCY.CURRENCY_NOK'},
        {value: 'PLN', label: 'ACCOUNT.CURRENCY.CURRENCY_PLN'},
        {value: 'CZK', label: 'ACCOUNT.CURRENCY.CURRENCY_CZK'},
        {value: 'RON', label: 'ACCOUNT.CURRENCY.CURRENCY_RON'},
        {value: 'SEK', label: 'ACCOUNT.CURRENCY.CURRENCY_SEK'},
        {value: 'HUF', label: 'ACCOUNT.CURRENCY.CURRENCY_HUF'}
      ],
      validators: ['required']
    },
    tradesEuro: {
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO',
      multiple: true,
      value: ['AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'GR', 'ES', 'NL', 'IE', 'LT', 'LU', 'MT', 'MC', 'DE', 'PT', 'SK', 'SI', 'IT', 'LV'],
      options: [
        {value: 'AT', label: 'AT'},
        {value: 'BE', label: 'BE'},
        {value: 'CY', label: 'CY'},
        {value: 'EE', label: 'EE'},
        {value: 'FI', label: 'FI'},
        {value: 'FR', label: 'FR'},
        {value: 'GR', label: 'GR'},
        {value: 'ES', label: 'ES'},
        {value: 'NL', label: 'NL'},
        {value: 'IE', label: 'IE'},
        {value: 'LT', label: 'LT'},
        {value: 'LU', label: 'LU'},
        {value: 'MT', label: 'MT'},
        {value: 'MC', label: 'MC'},
        {value: 'DE', label: 'DE'},
        {value: 'PT', label: 'PT'},
        {value: 'SK', label: 'SK'},
        {value: 'SI', label: 'SI'},
        {value: 'IT', label: 'IT'},
        {value: 'LV', label: 'LV'}
      ]
    },
    tradesNonEuro: {
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO',
      multiple: true,
      value: ['BG', 'HR', 'DK', 'IS', 'LI', 'NO', 'PL', 'CZ', 'RO', 'CH', 'SE', 'GB', 'HU'],
      options: [
        {value: 'BG', label: 'BG'},
        {value: 'HR', label: 'HR'},
        {value: 'DK', label: 'DK'},
        {value: 'IS', label: 'IS'},
        {value: 'LI', label: 'LI'},
        {value: 'NO', label: 'NO'},
        {value: 'PL', label: 'PL'},
        {value: 'CZ', label: 'CZ'},
        {value: 'RO', label: 'RO'},
        {value: 'CH', label: 'CH'},
        {value: 'SE', label: 'SE'},
        {value: 'GB', label: 'GB'},
        {value: 'HU', label: 'HU'}
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
    }).present();
  }

}
