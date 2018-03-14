import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class OffersDAO {

  constructor(private http: HttpClient) {
  }

  query() {
    return this.http.get('/api/v1/offers').toPromise();
  }

  get(id) {
    return this.http.get(`/api/v1/offers/${id}`).toPromise();
  }

  remove(id) {
    return this.http.delete('/api/v1/offers/' + id).toPromise();
  }

  create(data) {
    return this.http.post('/api/v1/offers', data).toPromise();
  }

  take(id, data) {
    return this.http.post(`/api/v1/offers/${id}/take`, data).toPromise();
  }
}
