import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import {SettingsService} from '../services/settings.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private settings: SettingsService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({headers: req.headers.set('Authorization', this.settings.authorizationHeader)});
    return next.handle(authReq)
      .catch(error => {
        if(!error || 401 !== error.status) {
          return Observable.throw(error);
        }
        this.settings.isAuthorizationRequired = true;
        this.settings.authorizationHeader = '';
        this.settings.saveSettings();
        this.router.navigateByUrl('/login');
        return Observable.throw(error);
      }) as any;
  }
}
