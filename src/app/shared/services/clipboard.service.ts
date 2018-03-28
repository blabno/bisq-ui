import {Injectable} from '@angular/core';
import {Clipboard as IonicClipboard} from '@ionic-native/clipboard';

@Injectable()
export class ClipboardService {
  constructor(private clipboard: IonicClipboard) {}

  copy(value) {
    return new Promise((resolve, reject) => {
      if (document && document.execCommand) {
        document.execCommand('copy');
        resolve();
      } else if (this.clipboard) {
        return this.clipboard.copy(value);
      }
    });
  }
}
