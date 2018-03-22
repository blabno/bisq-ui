import {Component} from '@angular/core';

@Component({
  selector: 'app-wallet-pass',
  templateUrl: 'wallet-pass.component.html'
})
export class WalletPassComponent {

  passwordExist: boolean = false;

  constructor() {
  }

  setPassword() {
    this.passwordExist = true;
  }

  removePassword() {
    this.passwordExist = false;
  }
}
