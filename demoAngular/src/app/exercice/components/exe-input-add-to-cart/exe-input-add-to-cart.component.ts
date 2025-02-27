import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from '../../../models/iarticle';

@Component({
  selector: 'app-exe-input-add-to-cart',
  standalone: false,
  templateUrl: './exe-input-add-to-cart.component.html',
  styleUrl: './exe-input-add-to-cart.component.css'
})
export class ExeInputAddToCartComponent {

  @Input()
  public article! : IArticle;

  @Output()
  public addToCartEmitter = EventEmitter<IArticle>;

  constructor(){
    this.addToCartEmitter = new EventEmitter<IArticle>();
    this.productNameEmmitter = new EventEmitter<string>();
  }

   // public addToCart():void{
  //   this.addToCartEmitter.next(this.article);
  // }


  //Correction

  public productName? : string;

  @Output()
  public productNameEmmitter : EventEmitter<string>

  public addProduct():void{
    if(!this.productName || !this.productName.trim()) throw new Error("Product must have a name")
    this.productNameEmmitter.next(this.productName);
    this.productName = undefined;
  }

 
}
