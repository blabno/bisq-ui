import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class P2pDAO {

  constructor(private http: HttpClient) {
  }

  status() {
    return this.http.get('/api/v1/p2p/status').toPromise()
  }
}
