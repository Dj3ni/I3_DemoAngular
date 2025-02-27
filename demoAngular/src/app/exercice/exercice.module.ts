import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exe01Component } from './components/exe01/exe01.component';
import { Exe02Component } from './components/exe02/exe02.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ExeInputAddToCartComponent } from './components/exe-input-add-to-cart/exe-input-add-to-cart.component';
import { ExeInputCartComponent } from './components/exe-input-cart/exe-input-cart.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShoplistV2Component } from './components/shoplist-v2/shoplist-v2.component';
import { CartV2Component } from './components/cart-v2/cart-v2.component';
import { AddToCartV2Component } from './components/add-to-cart-v2/add-to-cart-v2.component';


@NgModule({
  declarations: [
    Exe01Component,
    Exe02Component,
    ExercisesComponent,
    ChronoComponent,
    ExeInputAddToCartComponent,
    ExeInputCartComponent,
    ShoplistComponent,
    ShoplistV2Component,
    CartV2Component,
    AddToCartV2Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
