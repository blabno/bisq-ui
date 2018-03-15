import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import _ from 'lodash';

import {ToastService} from '../services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() form: any;
  @Input() initialValues: any = {};
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
      value: field.value || this.initialValues[key] || null,
      disabled: field.disabled || this.disabled || false
    }, this.getValidators(field.validators))));
    this.formGroup.valueChanges.subscribe(() => this.onChange.emit(this.formGroup));
  }

  getValidators(validators) {
    return _.map(validators, (validator) => {
      if ('required' === validator) {
        return Validators.required
      } else {
        return validator.handler
      }
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.onSubmit.emit(_.mapValues(this.formGroup.controls, 'value'));
    } else {
      this.toast.show('TOAST.FORM_VALIDATION_ERROR', 'error');
      _.forEach(this.formGroup.controls, (control) => control.markAsTouched());
    }
  }
}
