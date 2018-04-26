import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class CurrenciesDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/currencies`).toPromise();
  }

  getMarketPrices() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/currencies/prices`).toPromise();
  }
}
