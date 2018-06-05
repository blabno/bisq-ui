import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class UserDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  authenticate(password) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/user/authenticate`, {
      password
    }).toPromise();
  }

  setPassword(oldPassword, newPassword) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/user/password`, {
      oldPassword,
      newPassword
    }).toPromise();
  }
}
