import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss']
})
export class ControlValueAccessorComponent {

  myForm = this.fb.group({
    myInput1: ['', [Validators.required, Validators.max(1)]],
    myInput2: ['', Validators.required],
    myInput3: ['', Validators.required],
    myInput4: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  submit() {
    console.log(this.myForm.value);
  }
}
