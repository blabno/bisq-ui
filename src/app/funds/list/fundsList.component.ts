import _ from 'lodash';
import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {WalletDAO} from '../../shared/DAO/wallet.dao';

import {BackButtonService} from '../../shared/services/backButton.service';
import {ClipboardService} from '../../shared/services/clipboard.service';
import {ToastService} from '../../shared/services/toast.service';

import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-funds-list',
  templateUrl: 'fundsList.component.html'
})
export class FundsListComponent implements OnInit, OnDestroy {

  @Input() type: String;

  public walletAddresses = [];
  public generateInProgress = false;
  public selectedWallet: any = {};
  public amount;
  public label = 'Fund Bisq wallet';
  public qrCode;
  public loading = true;
  private unregisterBackButton = _.noop;

  constructor(private walletDao: WalletDAO,
              private toast: ToastService,
              private clipboard: ClipboardService,
              private backButton: BackButtonService) {
  }

  ngOnInit() {
    this.generateAddress();
    this.getAddressesData();
  }

  ngOnDestroy() {
    this.unregisterBackButton();
  }

  getAddressesData() {
    this.loading = true;
    this.walletDao.getAddresses(this.type)
      .then(res => {
        this.walletAddresses = _.get(res, 'walletAddresses') || [];
        this.loading = false;
      })
      .catch(error => this.toast.error(error));
  }

  generateAddress() {
    this.generateInProgress = true;
    this.walletDao
      .createNewWallet()
      .then((res: any) => {
        this.getAddressesData();
        this.generateInProgress = false;
      })
      .catch(error => {
        this.toast.error(error, 'TOAST.NEW_ADDRESS_CREATE_ERROR');
      });
  }

  updateQrCode() {
    if (this.selectedWallet) {
      let qrCode = `bitcoin:${this.selectedWallet.address}?label=${this.label}`;
      this.qrCode = this.amount ? qrCode + `&amount=${this.amount}` : qrCode;
    }
  }

  selectWallet(wallet) {
    this.unregisterBackButton = this.backButton.register(()=>{
      this.getBack();
    });
    this.selectedWallet = wallet;
    this.updateQrCode();
  }

  getBack() {
    this.unregisterBackButton();
    this.selectedWallet = {};
    this.updateQrCode();
  }

  async addressSelect(event) {
    if (event && event.target && event.target.select) event.target.select();
    await this.clipboard.copy(this.selectedWallet.address);
    this.toast.show(t('TOAST.ADDRESS_COPIED_TO_CLIPBOARD'), 'success');
  }
}
