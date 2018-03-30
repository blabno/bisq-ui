import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';

import {InfoModalService} from '../../shared/infoModal/infoModal.service';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit, OnDestroy {
  paymentForm = {
    paymentMethod: {
      type: 'select', label: t('ACCOUNT.CURRENCY.PAYMENT_METHOD'),
      options: [
        {value: 'SEPA', label: 'SEPA'},
        {value: 'VENMO', label: 'Venmo'}
      ]
    },
  };
  sepaForm = {
    holderName: {
      type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
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
      type: 'select', label: t('ACCOUNT.CURRENCY.BANK_COUNTRY'),
      options: [
        {value: 'AT', label: t('ACCOUNT.CURRENCY.COUNTRY_AT')},
        {value: 'BE', label: t('ACCOUNT.CURRENCY.COUNTRY_BE')},
        {value: 'CY', label: t('ACCOUNT.CURRENCY.COUNTRY_CY')},
        {value: 'EE', label: t('ACCOUNT.CURRENCY.COUNTRY_EE')},
        {value: 'FI', label: t('ACCOUNT.CURRENCY.COUNTRY_FI')},
        {value: 'FR', label: t('ACCOUNT.CURRENCY.COUNTRY_FR')},
        {value: 'GR', label: t('ACCOUNT.CURRENCY.COUNTRY_GR')},
        {value: 'ES', label: t('ACCOUNT.CURRENCY.COUNTRY_ES')},
        {value: 'NL', label: t('ACCOUNT.CURRENCY.COUNTRY_NL')},
        {value: 'IE', label: t('ACCOUNT.CURRENCY.COUNTRY_IE')},
        {value: 'LT', label: t('ACCOUNT.CURRENCY.COUNTRY_LT')},
        {value: 'LU', label: t('ACCOUNT.CURRENCY.COUNTRY_LU')},
        {value: 'MT', label: t('ACCOUNT.CURRENCY.COUNTRY_MT')},
        {value: 'MC', label: t('ACCOUNT.CURRENCY.COUNTRY_MC')},
        {value: 'DE', label: t('ACCOUNT.CURRENCY.COUNTRY_DE')},
        {value: 'PT', label: t('ACCOUNT.CURRENCY.COUNTRY_PT')},
        {value: 'SK', label: t('ACCOUNT.CURRENCY.COUNTRY_SK')},
        {value: 'SI', label: t('ACCOUNT.CURRENCY.COUNTRY_SI')},
        {value: 'IT', label: t('ACCOUNT.CURRENCY.COUNTRY_IT')},
        {value: 'LV', label: t('ACCOUNT.CURRENCY.COUNTRY_LV')},
        {value: 'BG', label: t('ACCOUNT.CURRENCY.COUNTRY_BG')},
        {value: 'HR', label: t('ACCOUNT.CURRENCY.COUNTRY_HR')},
        {value: 'DK', label: t('ACCOUNT.CURRENCY.COUNTRY_DK')},
        {value: 'IS', label: t('ACCOUNT.CURRENCY.COUNTRY_IS')},
        {value: 'LI', label: t('ACCOUNT.CURRENCY.COUNTRY_LI')},
        {value: 'NO', label: t('ACCOUNT.CURRENCY.COUNTRY_NO')},
        {value: 'PL', label: t('ACCOUNT.CURRENCY.COUNTRY_PL')},
        {value: 'CZ', label: t('ACCOUNT.CURRENCY.COUNTRY_CZ')},
        {value: 'RO', label: t('ACCOUNT.CURRENCY.COUNTRY_RO')},
        {value: 'CH', label: t('ACCOUNT.CURRENCY.COUNTRY_CH')},
        {value: 'SE', label: t('ACCOUNT.CURRENCY.COUNTRY_SE')},
        {value: 'GB', label: t('ACCOUNT.CURRENCY.COUNTRY_GB')},
        {value: 'HU', label: t('ACCOUNT.CURRENCY.COUNTRY_HU')}
      ],
      validators: ['required']
    },
    selectedTradeCurrency: {
      type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
      options: [
        {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
        {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
        {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
        {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
        {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
        {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
        {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
        {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
        {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
        {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
        {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
      ],
      validators: ['required']
    },
    acceptedCountriesEuro: {
      type: 'select', label: t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO'),
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
    acceptedCountriesNonEuro: {
      type: 'select', label: t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO'),
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
    salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
    accountName: {
      type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
      validators: ['required']
    },
    limitations: {
      type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
      text: t('ACCOUNT.CURRENCY.LIMITATION_SEPA')
    }
  };
  venmoForm = {
    holderName: {
      type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
      validators: ['required']
    },
    venmoUserName: {
      type: 'text', label: t('ACCOUNT.CURRENCY.VENMO_NAME'),
      validators: ['required']
    },
    selectedTradeCurrency: {
      type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
      value: 'USD',
      options: [
        {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
      ],
      disabled: true,
    },
    tradeCurrencies: {
      type: 'select',
      multiple: true,
      value: ['USD'],
      options: [
        {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
      ],
      hidden: true
    },
    salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
    accountName: {
      type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
      validators: ['required']
    },
    limitations: {
      type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
      text: t('ACCOUNT.CURRENCY.LIMITATION_VENMO')
    }
  };

  formOpened: boolean;
  formDisabled: boolean;
  selectedForm: string;
  accounts = [];
  paymentValues = {};
  detailsValues = {id: ''};
  unregisterBackButton = _.noop;
  creatingAccount;
  deletingAccount;
  loading = true;

  constructor(private initModal: InfoModalService,
              private translate: TranslateService,
              private paymentAccountsDAO: PaymentAccountsDAO,
              private toast: ToastService,
              private platform: Platform,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.paymentAccountsDAO.query().then((result: any) => {
      this.accounts = result.paymentAccounts || [];
      this.loading = false;
    });
    this.initModal.show({
      id: 'accountInit',
      title: t('ACCOUNT.INIT_MODAL.TITLE'),
      text: t('ACCOUNT.INIT_MODAL.TEXT'),
      doNotShowButton: true
    });
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

  submit(payload) {
    this.creatingAccount = true;
    payload.paymentMethod = this.selectedForm;
    payload = _.omit(payload, ['salt', 'limitations']);
    this.paymentAccountsDAO.create(payload)
      .then(() => {
        this.cancel();
        this.refreshList();
        this.toast.show(t('TOAST.PAYMENT_METHOD_CREATED'), 'info');
        this.creatingAccount = false;
      })
      .catch(() => {
        this.toast.show(t('TOAST.PAYMENT_METHOD_CREATE_ERROR'), 'error');
        this.creatingAccount = false;
      });
  }

  submitSepa(values) {
    const payload = _.pick(values, ['holderName', 'iban', 'bic', 'accountName', 'countryCode', 'selectedTradeCurrency', 'accountName']);
    payload.tradeCurrencies = [values.selectedTradeCurrency];
    payload.acceptedCountries =  _.concat(values.acceptedCountriesEuro, values.acceptedCountriesNonEuro);
    this.submit(payload)
  }

  submitVenmo(values) {
    this.submit(values)
  }

  delete() {
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: this.translate.instant(t('ACCOUNT.CURRENCY.DELETE_CONFIRMATION')),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('CONFIRM'),
          handler: () => {
            this.deletingAccount = true;
            this.paymentAccountsDAO.delete(this.detailsValues.id)
              .then(() => {
                this.cancel();
                this.refreshList();
                this.toast.show(t('TOAST.PAYMENT_METHOD_DELETED'), 'info');
                this.deletingAccount = false;
              })
              .catch(() => {
                this.toast.show(t('TOAST.PAYMENT_METHOD_DELETE_ERROR'), 'error');
                this.deletingAccount = false;
              });
          }
        }
      ]
    }).present();
  }

}
