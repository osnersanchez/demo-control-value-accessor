import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyInputComponent } from './my-input/my-input.component';
import { MyInputWithConnectorComponent } from './my-input-with-connector/my-input-with-connector.component';
import { MyInputWithClassComponent } from './my-input-with-class/my-input-with-class.component';

@NgModule({
  declarations: [
    MyInputComponent,
    MyInputWithConnectorComponent,
    MyInputWithClassComponent
  ],
  exports: [
    MyInputComponent,
    MyInputWithConnectorComponent,
    MyInputWithClassComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MyInputModule { }
