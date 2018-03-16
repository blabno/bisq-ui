import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WalletDAO {

  constructor(private http: HttpClient) {
  }

  query() {
    return this.http.get('/api/v1/wallet').toPromise();
  }

  getTransactions() {
    return this.http.get('/api/v1/wallet/transactions').toPromise();
  }

  getAddresses() {
    return this.http.get('/api/v1/wallet/addresses').toPromise();
  }

  createNewWallet() {
    return this.http.post('/api/v1/wallet/btc/addresses', {
      context: 'ARBITRATOR',
      unused: true
    }).toPromise();

  }
}
