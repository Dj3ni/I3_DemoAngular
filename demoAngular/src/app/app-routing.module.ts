import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'', component:NavMenuComponent},
  {path: "demo", loadChildren:() => import ("./demo/demo.module").then(m => m.DemoModule)}, // Angular ne va charger les modules de demo que lorsqu'on clique sur le lien
  {path:"exercise", loadChildren:()=> import ("./exercice/exercice.module").then(m=>m.ExerciceModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
