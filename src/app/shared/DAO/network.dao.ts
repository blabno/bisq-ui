import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {SettingsService} from "../services/settings.service";

@Injectable()
export class NetworkDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  getBitcoinStatus() {
    return this.http.get( `${this.settings.backendUrl}/api/v1/network/bitcoin/status`).toPromise();
  }

  getP2PNetworkStatus() {
    return this.http.get( `${this.settings.backendUrl}/api/v1/network/p2p/status`).toPromise();
  }
}
