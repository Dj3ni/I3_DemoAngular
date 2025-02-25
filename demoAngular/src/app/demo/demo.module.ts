import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02Component } from './components/demo02/demo02.component';
import { MainDemoComponent } from './components/main-demo/main-demo.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { FormsModule } from '@angular/forms';
import { Demo04Component } from './components/demo04/demo04.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainDemoComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DemoModule { }
