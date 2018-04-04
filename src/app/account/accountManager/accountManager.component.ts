import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';

import {InfoModalService} from '../../shared/infoModal/infoModal.service';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-account-manager',
  templateUrl: 'accountManager.component.html'
})
export class AccountManagerComponent implements OnInit, OnDestroy {
  @Input() formSchema: any;
  @Input() list: any;
  @Input() create: any;
  @Input() remove: any;
  @Input() emptyMessage: string;
  @Input() methodLabel: string;

  paymentForm: any;
  formMap: any;
  formOpened: boolean;
  formDisabled: boolean;
  selectedForm: string;
  accounts = [];
  paymentValues = {};
  detailsValues = {id: '', selectedTradeCurrency: ''};
  unregisterBackButton = _.noop;
  creatingAccount;
  deletingAccount;
  loading = true;

  constructor(private initModal: InfoModalService,
              private translate: TranslateService,
              private toast: ToastService,
              private platform: Platform,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.list().then(result => {
      this.accounts = result || [];
      this.loading = false;
    });
    this.initModal.show({
      id: 'accountInit',
      title: 'ACCOUNT.INIT_MODAL.TITLE',
      text: 'ACCOUNT.INIT_MODAL.TEXT',
      doNotShowButton: true
    });
    this.paymentForm = {
      paymentMethod: {
        type: 'select', label: this.methodLabel,
        options: _.map(this.formSchema, item => ({value: item.key, label: item.label}))
      }
    };
    this.formMap = _.mapKeys(this.formSchema, 'key');
  }

  ngOnDestroy() {
    this.unregisterBackButton();
  }

  registerBackButton() {
    this.unregisterBackButton = this.platform.registerBackButtonAction(() => {
      this.doCancel();
      this.unregisterBackButton();
    });
  }

  show(index) {
    this.paymentValues = {paymentMethod: this.accounts[index].paymentMethod};
    this.detailsValues = this.accounts[index];
    this.selectedForm = this.accounts[index].paymentMethod;
    if ('BLOCK_CHAINS' === this.selectedForm) {
      this.selectedForm = this.detailsValues.selectedTradeCurrency;
      this.paymentValues = {paymentMethod: this.detailsValues.selectedTradeCurrency};
    }
    this.formDisabled = true;
    this.formOpened = true;
    this.registerBackButton();
  }

  addNew() {
    this.doCancel();
    this.formOpened = true;
    this.registerBackButton();
  }

  doCancel() {
    this.formOpened = false;
    this.formDisabled = false;
    this.selectedForm = null;
    this.paymentValues = _.mapValues(this.paymentValues, () => null);
    this.detailsValues = _.mapValues(this.detailsValues, () => null);
    this.unregisterBackButton();
  }

  cancel() {
    if(this.formDisabled) {
      this.doCancel();
      return;
    }
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: this.translate.instant('ACCOUNT.CURRENCY.CANCEL_CONFIRMATION'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('DISCARD'),
          handler: () => {
            this.doCancel();
          }
        }
      ]
    }).present();
  }

  refreshList() {
    return this.list()
      .then(result => (this.accounts = result));
  }

  change(form) {
    this.selectedForm = form.value.paymentMethod
  }

  submit(values) {
    this.creatingAccount = true;
    values.paymentMethod = this.selectedForm;
    this.create(values)
      .then(() => {
        this.doCancel();
        this.refreshList();
        this.toast.show('TOAST.PAYMENT_METHOD_CREATED', 'info');
        this.creatingAccount = false;
      })
      .catch(error => {
        if (_.has(error, 'error.errors')) {
          this.toast.show(error.error.errors.join('. '), 'error');
        } else {
          this.toast.show('TOAST.PAYMENT_METHOD_CREATE_ERROR', 'error');
        }
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
            this.remove(this.detailsValues.id)
              .then(() => {
                this.doCancel();
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
