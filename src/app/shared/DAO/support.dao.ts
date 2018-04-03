import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SettingsService} from '../services/settings.service';

@Injectable()
export class SupportDAO {

  private list = [
    {
      id: '4dfc-86e0e57f3804-4dfc',
      offerId: 'd14da110-48ed-4dfc-ae91-86e0e57f3804',
      offerDate: '2015-06-15T09:03:01+0900',
      tradeDate: Date.now()
    },
  ];
  private messages = [
    {
      date: 'Thu, 28 Mar 2018 09:00:00 GMT',
      message: 'Second Message'
    },
    {
      date: 'Thu, 29 Mar 2018 12:34:12 GMT',
      message: 'Message...'
    },
    {
      date: 'Thu, 27 Mar 2018 23:40:34 GMT',
      message: 'First message'
    }
  ];

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  query() {
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(this.list)
      }, 2000);
    });
  }

  getMessages(id) {
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(this.messages)
      }, 2000);
    });
  }
}
