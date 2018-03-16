import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TradesDAO {

  constructor(private http: HttpClient) {
  }

  query() {
    return this.http.get('/api/v1/trades').toPromise()
  }
}