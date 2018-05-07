import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class AppDAO {
  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  getVersions() {
    // return this.http.get(`${this.settings.backendUrl}/api/v1/versions`, {}).toPromise();
    return Promise.resolve({
      network: '1.0',
      p2p: '10',
      localDb: '0.5.8',
      tradeProtocol: '3.0',
      app: '3.0'
    });
  }

  checkAvailability(url) {
    return this.http.get(`${url}/api/v1/network/p2p/status`).toPromise();
  }
}
