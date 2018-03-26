import {Component, OnInit} from '@angular/core';
import {WalletDAO} from '../../shared/DAO/wallet.dao';

@Component({
  selector: 'app-funds-transaction',
  templateUrl: 'transaction.component.html'
})
export class TransactionComponent implements OnInit {
  public transactions = [];

  constructor(private walletDAO: WalletDAO) {}

  ngOnInit() {
    this.walletDAO
      .getTransactions()
      .then((result: any) => (this.transactions = result.transactions));
  }
}
