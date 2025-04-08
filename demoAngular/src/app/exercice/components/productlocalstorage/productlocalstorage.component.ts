import { Component } from '@angular/core';
import { IArticle } from '../../../models/iarticle';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartsessionService } from '../../../services/cartsession.service';

@Component({
  selector: 'app-productlocalstorage',
  standalone: false,
  templateUrl: './productlocalstorage.component.html',
  styleUrl: './productlocalstorage.component.css'
})
export class ProductlocalstorageComponent {
  product : IArticle;
  productForm : FormGroup
  productName: string = 'ordinateur'
  optionList : Number[] = [1,2,3,4,5]
  inCart : Boolean;


  constructor(private _fb : FormBuilder, private _cartService : CartsessionService){
    this.inCart = _cartService.inCart(this.productName)
    this.productForm = this.initProductForm();
    this.product = this.convertToIArticle(this.productForm)
  }


  private initProductForm(): FormGroup{
    return this._fb.group({
      productName : [null, [
        Validators.required,
        Validators.minLength(2)
      ]],
      quantity : [(this.inCart)? this._cartService.getQuantity(this.productName): null,[
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]
      ]
    })
  }

  public convertToIArticle(form : FormGroup): IArticle {
    return {
      title: form.value.productName,
      quantity: form.value.quantity
    }
  }

  public onSubmit():void{
    if(!this.productForm.valid)throw new Error('Form invalid')
    //   let prod : IArticle = {
    // title: this.productName, quantity: this.productForm.value.quantity
    // }
    if(this.inCart) this._cartService.updateProduct(this.product)
    else this._cartService.addProduct(this.product);
    this.inCart = this._cartService.inCart(this.productName)
  }

}
