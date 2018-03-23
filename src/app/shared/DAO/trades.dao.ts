import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class TradesDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/trades`).toPromise()
  }

  paymentStarted(id) {
    return this.http.post(`/api/v1/trades/${id}/payment-started`, null).toPromise();
  }

  paymentReceived(id) {
    return this.http.post(`/api/v1/trades/${id}/payment-received`, null).toPromise();
  }

  paymentWithdraw(id) {
    return this.http.post(`/api/v1/trades/${id}/move-funds-to-bisq-wallet`, null).toPromise();
  }
}
