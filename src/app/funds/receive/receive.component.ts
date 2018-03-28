import {Component, OnInit} from '@angular/core';
import {WalletDAO} from '../../shared/DAO/wallet.dao';
import {ToastService} from '../../shared/services/toast.service';
import {ClipboardService} from '../../shared/services/clipboard.service';

import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-funds-receive',
  templateUrl: 'receive.component.html'
})
export class ReceiveComponent implements OnInit {

  public mockedWallets= [
    {
      id: "1",
      address: "e8TFTW8tGb4fmQF5GDmYsT8OgOwJ985m",
      balance: 0.00
    }, {
      id: "2",
      address: "eajfaMFvmDN2PBt6dnPdmvurYIiJYhpO",
      balance: 0.00
    }, {
      id: "3",
      address: "b2LUk5LxDqSYHfiNT8Uaw8jDo9DIOUHW",
      balance: 0.02
    }, {
      id: "4",
      address: "e8TFTW8tGb4fmQF5GDmYsT8OgOwJ985m",
      balance: 0.054
    }, {
      id: "5",
      address: "eajfaMFvmDN2PBt6dnPdmvurYIiJYhpO",
      balance: 0.00
    }, {
      id: "6",
      address: "b2LUk5LxDqSYHfiNT8Uaw8jDo9DIOUHW",
      balance: 0.0001
    }
  ]
  public generateInProgress = false;
  public selectedWallet: any = {};
  public address;
  public amount;
  public label = 'Fund Bisq wallet';
  public qrCode;

  constructor(private walletDao: WalletDAO, private toast: ToastService, private clipboard: ClipboardService) {}

  ngOnInit() {
    this.generateAddress();
  }

  generateAddress() {
    this.generateInProgress = true;
    this.walletDao
      .createNewWallet()
      .then((res: any) => {
        this.address = res.address;
        this.updateQrCode();
        this.generateInProgress = false;
      })
      .catch(error => {
        this.toast.show(t('TOAST.NEW_ADDRESS_CREATE_ERROR'), 'error');
      });
  }

  updateQrCode() {
    let qrCode = `bitcoin:${this.selectedWallet && this.selectedWallet.address || this.address}?label=${this.label}`;
    this.qrCode = this.amount ? qrCode + `&amount=${this.amount}` : qrCode;
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
    await this.clipboard.copy(this.address);
    this.toast.show(t('TOAST.ADDRESS_COPIED_TO_CLIPBOARD'), 'info');
  }
}
