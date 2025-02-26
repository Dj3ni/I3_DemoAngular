import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { FormsModule } from '@angular/forms';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    MathPowPipe,
    ReverseTextPipe,
    ChronoFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe
  ]
})
export class SharedModule { 
}
