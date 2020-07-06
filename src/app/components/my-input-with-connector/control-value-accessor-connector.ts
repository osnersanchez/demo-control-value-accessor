import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { Injector, Input, ViewChild } from '@angular/core';
import { FunctionType, FunctionParam } from '../interfaces';

export class ControlValueAccessorConnector<T = string> implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  counter = 0;

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private injector: Injector) {
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: FunctionType): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: FunctionParam<T>): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: T): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
    if (obj) {
      this.counter = JSON.stringify(obj).length;
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
