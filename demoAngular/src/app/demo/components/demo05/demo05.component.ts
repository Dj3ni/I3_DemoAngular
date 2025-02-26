import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-demo05',
  standalone: false,
  templateUrl: './demo05.component.html',
  styleUrl: './demo05.component.css'
})
export class Demo05Component {
  public stock : number = 10;

  public subStock():void{
    this.stock--;
  }


  public roundPercent : number = 10; 
  public selectedNumber :number = 0;

  public checkedBox : boolean = true;

  public list : string[] = [
    "Directive de composant",
    "Directive structurelles",
    "Directives custom"
  ];

  public newUserValue? : string;

  public addNewUserValue():void{
    if(!this.newUserValue) throw new Error("The value is not valid...");
    this.list.push(this.newUserValue);
    this.newUserValue = undefined
  }

  public delUserValue(value : string): void {
    if(this.list.filter(v => v == value).length == 0) throw new Error ("Value not in list");
    this.list = this.list.filter(v => v != value)
  }

  public delUserIndex(index: number):void{
    if(index < 0) throw new Error ("index must be equals or bigger than 0.")
    if(index >= this.list.length) throw new Error("index not in list")
    this.list.splice(index,1);
  }

  public nbList: number[] = [1,2,3,4,5,6,7,8,9,10]

}
