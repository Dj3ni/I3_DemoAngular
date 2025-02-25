import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { Demo04Component } from './components/demo04/demo04.component';


const routes: Routes = [
  {path:'', component: MainDemoComponent,children : [
    {path:'demo01', component: Demo01Component},
    {path:'demo02', component: Demo02Component},
    {path:'demo03',component:Demo03Component},
    {path:'demo04', component:Demo04Component}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
//fait le lien entre les components et les routes du module
