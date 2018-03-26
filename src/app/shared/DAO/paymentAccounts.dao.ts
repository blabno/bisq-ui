import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class PaymentAccountsDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/payment-accounts`).toPromise();
  }

  create(payload) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/payment-accounts`, payload).toPromise();
  }

  delete(id) {
    return this.http.delete(`${this.settings.backendUrl}/api/v1/payment-accounts/${id}`).toPromise();
  }
}
