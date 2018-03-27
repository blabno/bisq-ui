import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class WalletDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/wallet`).toPromise();
  }

  getTransactions() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/wallet/transactions`).toPromise();
  }

  getAddresses() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/wallet/addresses`).toPromise();
  }

  createNewWallet() {
    return this.http.post(`${this.settings.backendUrl}/api/v1/wallet/btc/addresses`, {
      context: 'AVAILABLE',
      unused: true
    }).toPromise();
  }
}
