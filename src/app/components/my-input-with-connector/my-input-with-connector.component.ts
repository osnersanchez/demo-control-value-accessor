import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from './control-value-accessor-connector';

@Component({
  selector: 'app-my-input-with-connector',
  templateUrl: './my-input-with-connector.component.html',
  styleUrls: ['./my-input-with-connector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputWithConnectorComponent),
      multi: true
    }
  ]
})
export class MyInputWithConnectorComponent extends ControlValueAccessorConnector<number>  {
  value: number;

  readonly minusOne = -1;
  readonly one = 1;

  constructor(injector: Injector) {
    super(injector);
  }

  onInput(value: number) {
    this.control.setValue(value);
  }

  addValue(value: number) {
    this.onInput(Number(this.control.value || 0) + value || 0);
  }
}
