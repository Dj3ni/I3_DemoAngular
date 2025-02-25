import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MathPowPipe,
    ReverseTextPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ReverseTextPipe,
    MathPowPipe
  ]
})
export class SharedModule { 

}
