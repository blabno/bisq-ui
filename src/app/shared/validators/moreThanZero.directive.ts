import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator,
  AbstractControl
} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[moreThanZero]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MoreThanZeroValidator,
      multi: true
    }
  ]
})
export class MoreThanZeroValidator implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.moreThanZero();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

  moreThanZero(): ValidatorFn {
    return (c: AbstractControl) => {
      if(c.value > 0) return null;
      return {
        moreThanZero: {
          valid: false
        }
      };
    };
  }
}
