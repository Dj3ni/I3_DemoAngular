import { Component } from '@angular/core';
import { ShoplistExeService } from '../../../services/shoplist-exe.service';

@Component({
  selector: 'app-add-to-cart-v2',
  standalone: false,
  templateUrl: './add-to-cart-v2.component.html',
  styleUrl: './add-to-cart-v2.component.css'
})
export class AddToCartV2Component {
    public productName? : string;

    constructor(private _shopService : ShoplistExeService){

    }

    public addProduct(): void {
      if(!this.productName) throw new Error('The product name is required')
        this._shopService.addProduct(this.productName);
        this.productName = undefined;
    }
}
