import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PaymentAccountsDAO {

  constructor(private http: HttpClient) {
  }

  query() {
    return this.http.get('/api/v1/payment-accounts').toPromise()
  }
}
