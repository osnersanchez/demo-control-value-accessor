import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import { ControlValueAccessorExtendDirective } from './control-value-accessor-extend.directive';

@Component({
  selector: 'app-my-input-with-class',
  templateUrl: './my-input-with-class.component.html',
  styleUrls: ['./my-input-with-class.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => MyInputWithClassComponent),
  //     multi: true
  //   }
  // ]
})
export class MyInputWithClassComponent extends ControlValueAccessorExtendDirective<number> {

  readonly minusOne = -1;
  readonly one = 1;

  addValue(value: number) {
    this.value = (Number(this.value || 0) + value || 0);
  }

  onInput(value: number) {
    this.value = value;
  }
}
