import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() form: any;
  @Input() data: any;
  @Output() onChange = new EventEmitter<any>();
  @Output() onSubmit = new EventEmitter<any>();

  formFields;

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formFields = _.map(this.form, (field, key) => ({...field, key}));
    this.formGroup = new FormGroup(_.mapValues(this.form, (field) => new FormControl({
      value: field.value || null,
      disabled: field.disabled
    }, this.getValidators(field.validators))));
    this.formGroup.valueChanges.subscribe((values) => this.onChange.emit(values))
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
      this.onSubmit.emit(this.formGroup.value);
    } else {
      _.forEach(this.formGroup.controls, (control) => control.markAsTouched());
    }
  }
}
