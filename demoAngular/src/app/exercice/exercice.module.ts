import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exe01Component } from './components/exe01/exe01.component';
import { Exe02Component } from './components/exe02/exe02.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ChronoComponent } from './components/chrono/chrono.component';


@NgModule({
  declarations: [
    Exe01Component,
    Exe02Component,
    ExercisesComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
