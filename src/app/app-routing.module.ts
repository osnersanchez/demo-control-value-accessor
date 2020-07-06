import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';


const routes: Routes = [
  {
    path: '',
    component: ControlValueAccessorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
