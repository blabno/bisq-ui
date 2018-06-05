import _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {WalletDAO} from '../../shared/DAO/wallet.dao';
import {ToastService} from '../../shared/services/toast.service';

@Component({
  selector: 'app-funds-transaction',
  templateUrl: 'transaction.component.html'
})
export class TransactionComponent implements OnInit {
  public transactions = [];
  public loading = true;

  constructor(private walletDAO: WalletDAO, private toast: ToastService) {
  }

  ngOnInit() {
    this.walletDAO.getTransactions()
      .then((result: any) => {
        this.transactions = _.orderBy(result.transactions || [], 'updateTime', 'desc');
        this.loading = false;
      })
      .catch(error => this.toast.error(error));
  }
}
