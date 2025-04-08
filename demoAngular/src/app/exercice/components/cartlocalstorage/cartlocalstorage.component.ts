import { Component } from '@angular/core';
import { IArticle } from '../../../models/iarticle';
import { CartsessionService } from '../../../services/cartsession.service';

@Component({
  selector: 'app-cartlocalstorage',
  standalone: false,
  templateUrl: './cartlocalstorage.component.html',
  styleUrl: './cartlocalstorage.component.css'
})
export class CartlocalstorageComponent {
  public cart : IArticle[];
  
  constructor(private _cartService : CartsessionService){
    this.cart = this._cartService.getCart()
  }

  public remove(productName : string):void{
    this._cartService.deleteProduct(productName);
    this.cart = this._cartService.getCart();
  }

}
