import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';


const routes: Routes = [
  {path:'', component: MainDemoComponent,children : [
    {path:'demo01', component: Demo01Component},
    {path:'demo02', component: Demo02Component}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
//fait le lien entre les components et les routes du module
