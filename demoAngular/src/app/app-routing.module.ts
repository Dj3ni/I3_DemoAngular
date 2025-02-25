import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "demo", loadChildren:() => import ("./demo/demo.module").then(m => m.DemoModule)} // Angular ne va charger les modules de demo que lorsqu'on clique sur le lien
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
