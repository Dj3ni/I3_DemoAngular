import { Component } from '@angular/core';
import { ILink } from '../../models/ilink';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

    links : ILink[] = [
      {title : "Home", url:"/", isVisible:true},
      {title : "Demos", url:"/demo", children:[
        {title:"Component1", url:"/demo/demo01"},
        {title:"Component2", url:"/demo/demo02"},
        {title:"Le binding", url:"/demo/demo03"},
        {title:"Les pipes", url:"/demo/demo04"},
        {title:"Les directives", url:"/demo/demo05"}

      ], isVisible: false},
      {title : "Exercices", url:"/exercise", children:[
        {title:"Modules", url:"/exercise/exe01"},
        {title:"Directives", url:"/exercise/exe02"},
        {title:"Chrono", url:"/exercise/chrono"}

      ], isVisible: false}

    ]

    // public toggleChildren(links? : ILink[]){
    //   if(links == undefined) return;
    //   for (let link of links){
    //     link.isVisible = !link.isVisible;
    //   }
    // }

    public toggleChildren(link? : ILink){
      if(link == undefined) return;
      link.isVisible = !link.isVisible;
    }

}
