import {Component} from '@angular/core';

@Component({
  selector: 'app-altcoins',
  templateUrl: 'altcoins.component.html'
})
export class AltcoinsComponent {

  model = {};
  formOpen:boolean = false;

  form = {
    altcoin: {
      label: 'Altcoin', type: 'select',
      options: [
        {value: 'ltc', label: "Litecoin (LTC)"},
        {value: 'xcn', label: "Cryptonite (XCN)"},
        {value: 'dash', label: "Dash (DASH)"},
        {value: 'eth', label: "Ether (ETH)"}
        ]
    },
    email: {label: 'Email address', type: 'text'},
    limitations: {
      label: 'Limitations',
      type: 'text',
      value: 'Max. trade duration: 6 days / Max. trade limit: 0.0625 BTC / Account age: 0 days',
      disabled: true
    },
    salt: {label: 'Salt for account age verification', type: 'text'},
    name: {label: 'Account name', type: 'text'},
    useCustom: {label: 'Use custom account name', type: 'checkbox'}
  };

  constructor() {
  }

  addNew() {
    this.formOpen = true;
  }

  cancel() {
    this.formOpen = false;
    this.model = {};
  }

}
