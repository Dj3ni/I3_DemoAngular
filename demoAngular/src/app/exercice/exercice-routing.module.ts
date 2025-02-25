import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { Exe01Component } from './components/exe01/exe01.component';
import { Exe02Component } from './components/exe02/exe02.component';
import { ChronoComponent } from './components/chrono/chrono.component';

const routes: Routes = [
  {path:"",component:ExercisesComponent, children: [
    {path:"exe01", component:Exe01Component},
    {path:"exe02", component:Exe02Component},
    {path:"chrono", component:ChronoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
