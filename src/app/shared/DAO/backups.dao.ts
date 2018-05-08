import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {SettingsService} from "../services/settings.service";

@Injectable()
export class BackupsDAO {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  getBackupsList() {
    return this.http.get(`${this.settings.backendUrl}/api/v1/backups`).toPromise();
  }

  createBackup() {
    return this.http.post(`${this.settings.backendUrl}/api/v1/backups`, {}).toPromise();
  }

  uploadBackup(formData) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/backups/upload`, formData).toPromise();
  }

  restoreBackup(path: string) {
    return this.http.post(`${this.settings.backendUrl}/api/v1/backups/${path}/restore`, {}).toPromise();
  }

  removeBackup(path: string) {
    return this.http.delete(`${this.settings.backendUrl}/api/v1/backups/${path}`).toPromise();
  }
}
