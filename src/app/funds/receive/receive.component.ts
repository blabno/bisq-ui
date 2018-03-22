import {Component} from '@angular/core';
import {WalletDAO} from "../../shared/DAO/wallet.dao";
import {ToastService} from "../../shared/services/toast.service";

import t from '../../shared/defineTextToTranslate';

t('TOAST.NEW_ADDRESS_CREATE_ERROR');

@Component({
  selector: 'app-funds-receive',
  templateUrl: 'receive.component.html'
})
export class ReceiveComponent {

  generateInProgress = false;
  address = '';

  constructor(private walletDao: WalletDAO, private toast: ToastService) {
  }

  generateAddress() {
    this.generateInProgress = true;
    this.walletDao.createNewWallet().then((res: any) => {
      this.address = res.address;
      this.generateInProgress = false;
    }).catch((error) => {
      this.toast.show('TOAST.NEW_ADDRESS_CREATE_ERROR', 'error');
    });
  }
}
