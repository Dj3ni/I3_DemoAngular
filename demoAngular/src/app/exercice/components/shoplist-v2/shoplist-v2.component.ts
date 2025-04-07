import { Component } from '@angular/core';
import { ShoplistExeService } from '../../../services/shoplist-exe.service';
import { IArticle } from '../../../models/iarticle';

@Component({
  selector: 'app-shoplist-v2',
  standalone: false,
  templateUrl: './shoplist-v2.component.html',
  styleUrl: './shoplist-v2.component.css'
})
export class ShoplistV2Component {
  public shopList? : IArticle[];

  constructor(private _shopService : ShoplistExeService){
    this.shopList = this._shopService.articles;
  }

  public onRemove(productName : string) : void{
    this._shopService.removeProduct(productName);
    this.shopList = this._shopService.articles;
  }
  
  public onSub(productName : string) : void{
    this._shopService.subProductQuantity(productName);
    this.shopList = this._shopService.articles;
  }
  public onAdd(productName : string) : void{
    this._shopService.addProductQuantity(productName);
    this.shopList = this._shopService.articles;
  }

}
