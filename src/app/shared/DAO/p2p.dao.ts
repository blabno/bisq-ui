import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SettingsService} from '../services/settings.service';

@Injectable()
export class P2pDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  status() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/network/p2p/status`).toPromise();
  }
}
