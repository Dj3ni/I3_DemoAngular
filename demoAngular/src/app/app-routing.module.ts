import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: "demo", loadChildren:() => import ("./demo/demo.module").then(m => m.DemoModule)} // Angular ne va charger les modules de demo que lorsqu'on clique sur le lien
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
