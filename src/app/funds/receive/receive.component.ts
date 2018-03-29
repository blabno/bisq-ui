import {Component, OnInit} from '@angular/core';
import {WalletDAO} from '../../shared/DAO/wallet.dao';
import {ToastService} from '../../shared/services/toast.service';
import {ClipboardService} from '../../shared/services/clipboard.service';
import _ from 'lodash';

import t from '../../shared/defineTextToTranslate';
@Component({
  selector: 'app-funds-receive',
  templateUrl: 'receive.component.html'
})
export class ReceiveComponent implements OnInit {
  public walletAddresses = [];
  public generateInProgress = false;
  public selectedWallet: any = {};
  public amount;
  public label = 'Fund Bisq wallet';
  public qrCode;
  public loading = true;

  constructor(private walletDao: WalletDAO, private toast: ToastService, private clipboard: ClipboardService) {}

  ngOnInit() {
    this.generateAddress();
    this.getAddressesData();
  }

  getAddressesData() {
    this.loading = true;
    this.walletDao.getAddresses('RECEIVE_FUNDS').then(res => {
      this.walletAddresses = _.get(res, 'walletAddresses');
      this.loading = false;
    });
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
        this.toast.show(t('TOAST.NEW_ADDRESS_CREATE_ERROR'), 'error');
      });
  }

  updateQrCode() {
    if (this.selectedWallet) {
      let qrCode = `bitcoin:${this.selectedWallet.address}?label=${this.label}`;
      this.qrCode = this.amount ? qrCode + `&amount=${this.amount}` : qrCode;
    }
  }

  selectWallet(wallet) {
    this.selectedWallet = wallet;
    this.updateQrCode();
  }

  getBack() {
    this.selectedWallet = {};
    this.updateQrCode();
  }

  async addressSelect(event) {
    if (event && event.target && event.target.select) event.target.select();
    await this.clipboard.copy(this.selectedWallet.address);
    this.toast.show(t('TOAST.ADDRESS_COPIED_TO_CLIPBOARD'), 'info');
  }
}
