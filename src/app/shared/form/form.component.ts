import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import _ from 'lodash';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() form: any;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();

  formFields;

  constructor() {
  }

  ngOnInit() {
    this.formFields = _.map(this.form, (field) => {
      return field;
    });
  }
}
