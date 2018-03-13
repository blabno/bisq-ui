import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

function _(str) {
  return str;
}

_('ACCOUNT.CURRENCY.PAYMENT_METHOD');
_('ACCOUNT.CURRENCY.OWNER_NAME');
_('ACCOUNT.CURRENCY.VALIDATION_8_NOR_11');
_('ACCOUNT.CURRENCY.VALIDATION_15_TO_34');
_('ACCOUNT.CURRENCY.BANK_COUNTRY');
_('ACCOUNT.CURRENCY.COUNTRY_PL');
_('ACCOUNT.CURRENCY.ACCEPTED_TRADES');
_('ACCOUNT.CURRENCY.LIMITATION_SEPA');
_('ACCOUNT.CURRENCY.LIMITATION_VENMO');
_('ACCOUNT.CURRENCY.LIMITATIONS');
_('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE');
_('ACCOUNT.CURRENCY.ACCOUNT_NAME');
_('ACCOUNT.CURRENCY.VENMO_NAME');
_('ACCOUNT.CURRENCY.CURRENCY');
_('ACCOUNT.CURRENCY.CURRENCY_USD');

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
  paymentForm = {
    paymentMethod: {
      type: 'select', label: 'ACCOUNT.CURRENCY.PAYMENT_METHOD',
      options: [
        {value: 'sepa', label: 'SEPA'},
        {value: 'venmo', label: 'Venmo'}
      ]
    },
  };
  sepaForm = {
    fullName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.OWNER_NAME',
      validators: ['required']
    },
    iban: {
      type: 'text', label: 'IBAN',
      validators: [
        'required',
        {
          key: 'wrongLength',
          message: 'ACCOUNT.CURRENCY.VALIDATION_8_NOR_11',
          handler: ibanValidator
        }
      ]
    },
    bic: {
      type: 'text', label: 'BIC',
      validators: [
        'required',
        {
          key: 'wrongLength',
          message: 'ACCOUNT.CURRENCY.VALIDATION_15_TO_34',
          handler: bicValidator
        }
      ]
    },
    country: {
      type: 'select', label: 'ACCOUNT.CURRENCY.BANK_COUNTRY',
      options: [{value: 'pl', label: "ACCOUNT.CURRENCY.COUNTRY_PL"}],
      validators: ['required']
    },
    tradesEuro: {
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES',
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
      type: 'select', label: 'ACCOUNT.CURRENCY.ACCEPTED_TRADES',
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
      type: 'text', label: 'ACCOUNT.CURRENCY.LIMITATIONS',
      value: 'ACCOUNT.CURRENCY.LIMITATION_SEPA',
      disabled: true
    },
    salt: {type: 'text', label: 'ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE'},
    name: {type: 'text', label: 'ACCOUNT.CURRENCY.ACCOUNT_NAME'}
  };
  venmoForm = {
    fullName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.OWNER_NAME',
      validators: ['required']
    },
    venmoName: {
      type: 'text', label: 'ACCOUNT.CURRENCY.VENMO_NAME',
      validators: ['required']
    },
    currency: {
      type: 'text', label: 'ACCOUNT.CURRENCY.CURRENCY',
      value: 'ACCOUNT.CURRENCY.CURRENCY_USD',
      disabled: true
    },
    limitations: {
      type: 'text', label: 'ACCOUNT.CURRENCY.LIMITATIONS',
      value: 'ACCOUNT.CURRENCY.LIMITATION_VENMO',
      disabled: true
    },
    salt: {type: 'text', label: 'ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE'},
    name: {type: 'text', label: 'ACCOUNT.CURRENCY.ACCOUNT_NAME'}
  };

  formOpen: boolean = false;
  formSelected: string;

  constructor(public translate: TranslateService) {
    this.translate.use('pl');
    this.translate.onLangChange.subscribe(() => {
       this.sepaForm.limitations.value = this.translate.instant('ACCOUNT.CURRENCY.LIMITATION_SEPA');
       this.venmoForm.currency.value = this.translate.instant('ACCOUNT.CURRENCY.CURRENCY_USD');
       this.venmoForm.limitations.value = this.translate.instant('ACCOUNT.CURRENCY.LIMITATION_VENMO');
    });
  }

  addNew() {
    this.formOpen = true;
  }

  cancel() {
    this.formOpen = false;
    this.formSelected = null;
  }

  change(values) {
    this.formSelected = values.paymentMethod
  }

  submit(values) {
    console.log(values);
  }

}
