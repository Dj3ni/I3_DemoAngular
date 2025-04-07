import { Injectable } from '@angular/core';
import { IArticle } from '../models/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ShoplistExeService {

  //Liste vide pour stocker les éléments

  public articles : IArticle[] = []
  
  constructor() { }

  getArticle(){
    return this.articles;
  }

  // correction

  public addProduct(productName: string): void{
    if(this.articles.filter(v=>v.title == productName).length > 0) throw new Error("Article already in list")
      this.articles.push({title: productName, quantity:1})
  }

  public removeProduct(productName:string):void{
    if(this.articles.filter(v=>v.title == productName).length == 0) throw new Error("Article not in list")
      this.articles = this.articles.filter(item => item.title !== productName);
  }

  public addProductQuantity(productName:string, quantity:number = 1): void{
    if(quantity <= 0) throw new Error ("Quantoty must be bigger than 0");
    if(this.articles.filter(v=>v.title == productName).length == 0) throw new Error("Article not in list")
      let article : IArticle
    }

  public subProductQuantity(productName: string, quantity: number = 1): void{
    if(quantity <= 0) throw new Error('The quantity must be greather than 0.');
    if(this.articles.filter(v => v.title == productName).length == 0) throw new Error(`The product ${productName} is not registered.`);
    let product : IArticle = this.articles.filter(v => v.title == productName)[0];
    if(quantity > product.quantity) throw new Error(`Quantity to substract is greather than product's quantity`)
    product.quantity -= quantity;
    if(product.quantity == 0) this.removeProduct(productName);
  }

  // addItem(name:string, quantity:number){
  //   const existingItem = this.article.find(item => item.name === name);
  //   if (existingItem) {
  //     existingItem.quantity += quantity;
  //   } else {
  //     this.article.push({ name, quantity });
  //   }
  // }

  // removeItem(name: string) {
  //   this.article = this.article.filter(item => item.name !== name);
  // }

}
