import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-trade-status',
  templateUrl: 'tradeStatus.component.html'
})
export class TradeStatusComponent {
  @Input() text: string;
  @Input() status: number;
  @Input() currentStep: number;
  @Input() definedStep: number;

  getStatus() {
    const currentStep = Number(this.currentStep);
    const definedStep = Number(this.definedStep);

    if (currentStep > definedStep) {
      return 'done';
    } else if (currentStep === definedStep) {
      return 'current';
    } else {
      return 'pending';
    }
  }

  constructor() {
  }
}
