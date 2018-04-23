import _ from 'lodash';
import {Injectable} from '@angular/core';
import {App, Platform} from 'ionic-angular';

import {ToastService} from './toast.service';

@Injectable()
export class BackButtonService {

  private lastTimeBackPress: number = 0;
  private timePeriodToExit: number = 2000;
  private actions: Array<{ id: string, fn: Function }> = [];
  private chars: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(
    private platform: Platform,
    private toast: ToastService,
    private ionicApp: App) {
  }

  public init() {
    this.platform.registerBackButtonAction(async (e) => {
      const overlayView = this.ionicApp._appRoot._overlayPortal._views[0];
      if (overlayView && overlayView.dismiss) {
        overlayView.dismiss().catch(_.noop);
        return;
      }

      if (this.actions.length) {
        const next = await _.last(this.actions).fn();
        if (next !== false) {
          return;
        }
      }

      const currentTime: number = new Date().getTime();
      if (currentTime - this.lastTimeBackPress < this.timePeriodToExit) {
        this.platform.exitApp();
      } else {
        this.toast.show('TOAST.EXIT_APP', 'info');
        this.lastTimeBackPress = currentTime;
      }
    }, 0);
  }

  public register(fn: Function) {
    const id = this.randomString(15, this.chars);
    this.actions.push({id, fn});
    return () => {
      const indexToRemove = _.findIndex(this.actions, o => o.id === id);
      this.actions.splice(indexToRemove, 1);
    }
  }

  private randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}
