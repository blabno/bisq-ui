import {Component} from '@angular/core';

@Component({
  selector: 'app-wallet-pass',
  templateUrl: 'wallet-pass.component.html'
})
export class WalletPassComponent {

  constructor() {
  }

  passwordExist: boolean = false;

  setPassword() {
    this.passwordExist = true;
  }

  removePassword() {
    this.passwordExist = false;
  }
}
