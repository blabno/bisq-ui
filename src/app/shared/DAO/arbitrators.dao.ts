import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class ArbitratorsDAO {
  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query(acceptedOnly: Boolean = false) {
    let params = new HttpParams().set('acceptedOnly', acceptedOnly.toString());
    return this.http
      .get(`${this.settings.backendUrl}/api/v1/arbitrators`, {params})
      .toPromise();
  }

  registerYourself(languageCodes: Array<String> = []) {
    const body = {
      languageCodes
    };
    return this.http.post(`${this.settings.backendUrl}/api/v1/arbitrators`, body).toPromise();
  }

  unregisterYourself() {
    return this.http.delete(`${this.settings.backendUrl}/api/v1/arbitrators`).toPromise();
  }

  select(address: String) {
    return this.http
      .post(`${this.settings.backendUrl}/api/v1/arbitrators/${address}/select`, {})
      .toPromise();
  }

  deselect(address: String) {
    return this.http
      .post(`${this.settings.backendUrl}/api/v1/arbitrators/${address}/deselect`, {})
      .toPromise();
  }
}
