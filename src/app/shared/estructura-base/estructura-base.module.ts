import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuraBaseComponent } from './estructura-base.component';



@NgModule({
  declarations: [EstructuraBaseComponent],
  imports: [
    CommonModule
  ],
  exports:[EstructuraBaseComponent]
})
export class EstructuraBaseModule { }
