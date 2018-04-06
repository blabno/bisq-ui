import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {SettingsService} from "../services/settings.service";

@Injectable()
export class OffersDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return this.http.get( `${this.settings.backendUrl}/api/v1/offers`).toPromise();
  }

  get(id) {
    return this.http.get(`${this.settings.backendUrl}/api/v1/offers/${id}`).toPromise();
  }

  remove(id) {
    return this.http.delete(`${this.settings.backendUrl}/api/v1/offers/${id}`, {responseType: 'text'}).toPromise();
  }

  create(data) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/offers/`, data).toPromise();
  }

  take(id, data) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/offers/${id}/take`, data).toPromise();
  }
}
