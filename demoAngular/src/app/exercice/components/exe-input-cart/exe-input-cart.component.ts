import { Component } from '@angular/core';
import { IArticle } from '../../../models/iarticle';

@Component({
  selector: 'app-exe-input-cart',
  standalone: false,
  templateUrl: './exe-input-cart.component.html',
  styleUrl: './exe-input-cart.component.css'
})
export class ExeInputCartComponent {

   
  public addToCart(article : IArticle): void {
    
  }
  
  //Correction
  public shopList : string[] = [];

  public addProductToShopList(productName: string):void {
    if(this.shopList.filter(v=>v == productName).length > 0) throw new Error
    this.shopList.push(productName);
  }
  
  public removeProduct (productName:string):void{
    let index : number = this.shopList.indexOf(productName);
    if(index == -1 ) throw new Error ("Not in the list")
      this.shopList.splice(index,1);
  }
}
