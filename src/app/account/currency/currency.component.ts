import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
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
export class CurrencyComponent implements OnInit, OnDestroy {
  paymentForm = {
    paymentMethod: {
      type: 'select', label: 'ACCOUNT.CURRENCY.PAYMENT_METHOD',
      options: formSchema.map(item => ({value: item.key, label: item.label}))
    }
  };
  formMap = _.mapKeys(formSchema, 'key');
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
      title: 'ACCOUNT.INIT_MODAL.TITLE',
      text: 'ACCOUNT.INIT_MODAL.TEXT',
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

  submit(values) {
    const payload = _.cloneDeep(values);
    this.creatingAccount = true;
    if ('SEPA' === this.selectedForm || 'SEPA_INSTANT' === this.selectedForm) {
      payload.acceptedCountries = _.concat(payload.acceptedCountriesEuro, payload.acceptedCountriesNonEuro);
      delete payload.acceptedCountriesEuro;
      delete payload.acceptedCountriesNonEuro;
    }
    if ('SPECIFIC_BANKS' === this.selectedForm) {
      payload.acceptedBanks = _.split(payload.acceptedBanks, ', ');
    }
    payload.paymentMethod = this.selectedForm;
    payload.tradeCurrencies = _.flatten([payload.tradeCurrencies]);
    payload.selectedTradeCurrency = payload.tradeCurrencies[0];
    delete payload.salt;
    delete payload.limitations;
    this.paymentAccountsDAO.create(payload)
      .then(() => {
        this.cancel();
        this.refreshList();
        this.toast.show('TOAST.PAYMENT_METHOD_CREATED', 'info');
        this.creatingAccount = false;
      })
      .catch(() => {
        this.toast.show('TOAST.PAYMENT_METHOD_CREATE_ERROR', 'error');
        this.creatingAccount = false;
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
            this.deletingAccount = true;
            this.paymentAccountsDAO.delete(this.detailsValues.id)
              .then(() => {
                this.cancel();
                this.refreshList();
                this.toast.show('TOAST.PAYMENT_METHOD_DELETED', 'info');
                this.deletingAccount = false;
              })
              .catch(() => {
                this.toast.show('TOAST.PAYMENT_METHOD_DELETE_ERROR', 'error');
                this.deletingAccount = false;
              });
          }
        }
      ]
    }).present();
  }

  notDoneYet() {
    this.toast.show('SHARED.NOT_DONE_YET', 'info');
  }

}
