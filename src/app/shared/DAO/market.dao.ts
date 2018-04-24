import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MarketDAO {

  constructor(private http: HttpClient) {
  }

  getAvailableMarkets() {
    return this.http.get('https://markets.bisq.network/api/markets').toPromise();
  }

  getPrices(market, interval = 'day', from) {
    return this.http.get(`https://markets.bisq.network/api/hloc?market=${market}&interval=${interval}&timestamp_from=${from}`).toPromise();
  }

  getVolumes(market, interval = 'day', from) {
    return this.http.get(`https://markets.bisq.network/api/volumes?market=${market}&interval=${interval}&timestamp_from=${from}`).toPromise();
  }
}
