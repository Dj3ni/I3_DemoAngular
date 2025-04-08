import { Injectable } from '@angular/core';
import { IArticle } from '../models/iarticle';

const KEY : string = 'localCart'

@Injectable({
  providedIn: 'root'
})
export class CartsessionService {

  public cart : IArticle[]

  constructor() { 
    this.cart = this.getCart();
  }

  public getCart(): IArticle[]{
    return JSON.parse(sessionStorage.getItem(KEY)??'[]') as IArticle[];
  }

  public getProduct(product:string):IArticle{
    this.cart = this.getCart();
    let index = this.cart.map(p=>p.title).indexOf(product);
    if(index == -1 ) throw new Error('Produit non présent');
    return this.cart[index]
  }

  public saveCart():void{
    sessionStorage.setItem(KEY, JSON.stringify(this.cart));
  }

  public addProduct(newProduct : IArticle):void{
    this.cart = this.getCart();
    if(this.cart.filter(p=>p.title == newProduct.title).length >= 1) throw new Error('Produit déjà présent!');
    this.cart.push(newProduct);
    this.saveCart();
  }

  public updateProduct(product : IArticle):void{
    this.getProduct(product.title).quantity = product.quantity;
    this.saveCart();
  }

  public deleteProduct(productName : string):void{
    this.cart = this.cart.filter(p=>p.title != productName);
    this.saveCart();
  }

  public inCart(productName : string):boolean{
    this.cart = this.getCart();
    return this.cart.map(p=>p.title).indexOf(productName) > -1
  }

  public getQuantity(productName : string):number {
      this.getProduct(productName);
      return this.cart.filter(p=>p.title == productName)[0].quantity;
  }

}
