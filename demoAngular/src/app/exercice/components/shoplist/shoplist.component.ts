import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shoplist',
  standalone: false,
  templateUrl: './shoplist.component.html',
  styleUrl: './shoplist.component.css'
})
export class ShoplistComponent {
  @Input()
  public shoplist! : string[]

  @Output()
  public productRemoveEmitter : EventEmitter<string>;

  constructor(){
    this.productRemoveEmitter = new EventEmitter<string>
  }

  public onRemove(productName:string):void{
    this.productRemoveEmitter.next(productName);
  }
}
