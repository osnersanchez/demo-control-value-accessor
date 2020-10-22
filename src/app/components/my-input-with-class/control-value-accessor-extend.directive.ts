import { ControlValueAccessor, ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';
import { FunctionParam, FunctionType } from '../interfaces';
import { HostBinding, Directive, Optional, Self } from '@angular/core';

@Directive()
export class ControlValueAccessorExtendDirective<T = string> implements ControlValueAccessor {
  private val: T;

  counter = 0;
  isDisabled: boolean;
  isTouched: boolean;
  set value(newValue: T) {
    this.writeValue(newValue);
  }
  get value(): T {
    return this.val;
  }

  @HostBinding('class.form-submited') get submited() {
    return (this.controlContainer as FormGroupDirective).submitted;
  }

  constructor(private controlContainer: ControlContainer, @Optional() @Self() protected ngControl: NgControl ) {
    ngControl.valueAccessor = this;
  }

  private onChange = (value: T) => { };
  private onTouch = () => { };

  registerOnChange(fn: FunctionParam<T>) {
    this.onChange = fn;
  }

  registerOnTouched(fn: FunctionType) {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  writeValue(value: T) {
    this.val = value;
    this.onTouch();
    this.onChange(this.val);
    if (value) {
      this.counter = JSON.stringify(value).length;
    }
  }
}