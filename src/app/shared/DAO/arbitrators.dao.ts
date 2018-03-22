import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ArbitratorsDAO {
  constructor(private http: HttpClient) {
  }

  query(acceptedOnly: Boolean = false) {
    let params = new HttpParams().set('acceptedOnly', acceptedOnly.toString());
    return this.http
      .get('/api/v1/arbitrators', {params})
      .toPromise();
  }

  registerYourself(languageCodes: Array<String> = []) {
    const body = {
      languageCodes
    };
    return this.http.post('/api/v1/arbitrators', body).toPromise();
  }

  unregisterYourself() {
    return this.http.delete('/api/v1/arbitrators').toPromise();
  }

  select(address: String) {
    return this.http
      .post(`/api/v1/arbitrators/${address}/select`, {})
      .toPromise();
  }

  deselect(address: String) {
    return this.http
      .post(`/api/v1/arbitrators/${address}/deselect`, {})
      .toPromise();
  }
}
