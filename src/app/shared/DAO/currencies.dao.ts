import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class CurrenciesDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/currencies`).toPromise();
  }

  getMarketPrices(currencies: Array<String> = []) {
    let params = new HttpParams().set('currencyCodes', currencies.join(','));
    return this.http.get(`${this.settings.backendUrl}/api/v1/currencies/prices`, {params}).toPromise();
  }
}
