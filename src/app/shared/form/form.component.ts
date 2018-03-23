import _ from 'lodash';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ToastService} from '../services/toast.service';

function ibanValidator(control) {
  if (!control.value || 15 > control.value.length || 36 < control.value.length) {
    return {iban: true}
  }
  return null;
}

function bicValidator(control) {
  if (!control.value || (8 !== control.value.length && 11 !== control.value.length)) {
    return {bic: true}
  }
  return null;
}

const validatorsMap = {
  required: Validators.required,
  iban: ibanValidator,
  bic: bicValidator
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, OnChanges {
  @Input() form: any;
  @Input() values: any = {};
  @Input() disabled: boolean;
  @Output() onChange = new EventEmitter<any>();
  @Output() onSubmit = new EventEmitter<any>();

  formFields;

  formGroup: FormGroup;

  constructor(private toast: ToastService) {
  }

  ngOnInit() {
    this.formFields = _.map(this.form, (field, key) => ({...field, key}));
    this.formGroup = new FormGroup(_.mapValues(this.form, (field, key) => new FormControl({
      value: field.value || this.values[key] || null,
      disabled: field.disabled || this.disabled || false
    }, _.map(field.validators, validator => validatorsMap[validator]))));
    this.formGroup.valueChanges.subscribe(() => this.onChange.emit(this.formGroup));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formGroup && changes.values) {
      this.formGroup.patchValue(changes.values.currentValue, {emitEvent: false});
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.onSubmit.emit(_.mapValues(this.formGroup.controls, 'value'));
    } else {
      this.toast.show('TOAST.FORM_VALIDATION_ERROR', 'error');
      _.forEach(this.formGroup.controls, (control) => control.markAsTouched());
    }
  }

  delete() {
    if (this.formGroup.valid) {
      this.onSubmit.emit(_.mapValues(this.formGroup.controls, 'value'));
    } else {
      this.toast.show('TOAST.FORM_VALIDATION_ERROR', 'error');
      _.forEach(this.formGroup.controls, (control) => control.markAsTouched());
    }
  }
}
