import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss']
})
export class ControlValueAccessorComponent {

  myForm1 = this.fb.group({
    myInput1: ['', [Validators.required, Validators.max(1)]],
    myInput2: ['', Validators.required]
  });

  myForm2 = this.fb.group({
    myInput1: ['', [Validators.required, Validators.max(1)]],
    myInput2: ['', Validators.required]
  });

  myForm3 = this.fb.group({
    myInput1: ['', [Validators.required, Validators.max(1)]],
    myInput2: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) {
    this.subscribeChanges();
    this.intervalPatchValue();
  }

  submit1() {
    console.log(this.myForm1.value);
  }

  submit2() {
    console.log(this.myForm2.value);
  }

  submit3() {
    console.log(this.myForm3.value);
  }

  intervalPatchValue() {
    setInterval(() => {
      this.myForm3.patchValue({
        myInput1: this.myForm3.value.myInput1 + 1
      });
    }, 5000);
  }

  subscribeChanges() {
    // this.myForm3.controls.myInput1.valueChanges.subscribe(values => {
    //   console.log('myInput1');
    //   console.log(values);
    // });
    // this.myForm3.controls.myInput2.valueChanges.subscribe(values => {
    //   console.log('myInput2');
    //   console.log(values);
    // });
    this.myForm3.valueChanges.subscribe(values => {
      console.log('myForm3');
      console.log(values);
    });
  }
}
