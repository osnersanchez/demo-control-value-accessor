import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FunctionParam, FunctionType } from '../interfaces';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]
})
export class MyInputComponent implements ControlValueAccessor  {
  counter = 0;
  value: number;
  isDisabled: boolean;

  readonly minusOne = -1;
  readonly one = 1;

  onChange = (value: number) => {};
  onTouch = () => {};

  onInput(value: number) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: number) {
    this.value = value;
    if (value) {
      this.counter = String(value).length;
    }
  }

  registerOnChange(fn: FunctionParam<number>) {
    this.onChange = fn;
  }

  registerOnTouched(fn: FunctionType) {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  addValue(value: number) {
    this.onInput(Number(this.value || 0) + value || 0);
  }
}
