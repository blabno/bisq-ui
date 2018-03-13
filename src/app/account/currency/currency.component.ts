import {Component} from '@angular/core';

function ibanValidator(control) {
  if (!control.value || (8 !== control.value.length && 11 !== control.value.length)) {
    return {wrongLength: true}
  }
  return null;
}

function bicValidator(control) {
  if (!control.value || 15 > control.value.length || 36 < control.value.length) {
    return {wrongLength: true}
  }
  return null;
}

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent {
  model = {};

  form = {
    paymentMethod: {
      label: 'Payment Method', type: 'select',
      options: [{value: 'sepa', label: 'SEPA'}],
      validators: ['required']
    },
    account: {
      label: 'Account owner full name', type: 'text',
      validators: ['required']
    },
    iban: {
      label: 'IBAN', type: 'text',
      validators: [
        'required',
        {
          key: 'wrongLength',
          message: 'Input length is neither 8 nor 11',
          handler: ibanValidator
        }
      ]
    },
    bic: {
      label: 'BIC', type: 'text',
      validators: [
        'required',
        {
          key: 'wrongLength',
          message: 'Number must have length 15 to 34 chars',
          handler: bicValidator
        }
      ]
    },
    country: {
      label: 'Country of bank', type: 'select',
      options: [{value: 'pl', label: "Polska (PL)"}],
      validators: ['required']
    },
    tradesEuro: {
      label: 'Accepted trades',
      type: 'select',
      multiple: true,
      options: [
        {value: 'at', label: "AT"},
        {value: 'be', label: "BE"},
        {value: 'cy', label: "CY"},
        {value: 'ee', label: "EE"},
        {value: 'fi', label: "FI"},
        {value: 'fr', label: "FR"},
        {value: 'gr', label: "GR"},
        {value: 'es', label: "ES"},
        {value: 'nl', label: "NL"},
        {value: 'ie', label: "IE"},
        {value: 'lt', label: "LT"},
        {value: 'lu', label: "LU"},
        {value: 'mt', label: "MT"},
        {value: 'mc', label: "MC"},
        {value: 'de', label: "DE"},
        {value: 'pt', label: "PT"},
        {value: 'sk', label: "SK"},
        {value: 'si', label: "SI"},
        {value: 'it', label: "IT"},
        {value: 'lv', label: "LV"}
      ]
    },
    tradesNonEuro: {
      label: 'Accepted trades',
      type: 'select',
      multiple: true,
      options: [
        {value: 'bg', label: "BG"},
        {value: 'hr', label: "HR"},
        {value: 'dk', label: "DK"},
        {value: 'is', label: "IS"},
        {value: 'li', label: "LI"},
        {value: 'no', label: "NO"},
        {value: 'pl', label: "PL"},
        {value: 'cz', label: "CZ"},
        {value: 'ro', label: "RO"},
        {value: 'ch', label: "CH"},
        {value: 'se', label: "SE"},
        {value: 'gb', label: "GB"},
        {value: 'hu', label: "HU"}
      ]
    },
    limitations: {
      label: 'Limitations',
      type: 'text',
      value: 'Max. trade duration: 6 days / Max. trade limit: 0.0625 BTC / Account age: 0 days',
      disabled: true
    },
    salt: {label: 'Salt for account age verification', type: 'text'},
    name: {label: 'Account name', type: 'text'},
  };

  formOpen: boolean = false;

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
