import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {SettingsService} from "../services/settings.service";

@Injectable()
export class PreferencesDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  get() {
    return this.http.get( `${this.settings.backendUrl}/api/v1/preferences`).toPromise();
  }

  set(data) {
    return this.http.put(`${this.settings.backendUrl}/api/v1/preferences`, data).toPromise();
  }

  getAvailableValues() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/preferences/available-values`).toPromise();
  }
}
