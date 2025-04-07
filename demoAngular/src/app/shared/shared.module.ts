import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleChildMenuDirective } from './directives/toggle-child-menu.directive';



@NgModule({
  declarations: [
    MathPowPipe,
    ReverseTextPipe,
    ChronoFormatPipe,
    HighlightDirective,
    ToggleChildMenuDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    HighlightDirective,
    ToggleChildMenuDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { 
}
