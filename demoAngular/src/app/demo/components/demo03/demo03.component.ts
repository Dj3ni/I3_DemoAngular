import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  standalone: false,
  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.css'
})
export class Demo03Component {
  public title : string = "Démo 03: Le binding";
  public userInput? : string;

  public count : number = 0;

  public AddCount():void{
    this.count++;
  }
}
