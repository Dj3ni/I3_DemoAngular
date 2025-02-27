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
        {title:"Les directives", url:"/demo/demo05"},
        {title:"Les Input", url:"/demo/demo06"},
        {title:"Les Services", url:"/demo/demo07"}

      ], isVisible: false},
      {title : "Exercices", url:"/exercise", children:[
        {title:"Modules", url:"/exercise/exe01"},
        {title:"Directives", url:"/exercise/exe02"},
        {title:"Chrono", url:"/exercise/chrono"},
        {title:"Cart", url:"/exercise/cart"}

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

      /* Correction */
    linksCorrection : ILink[] = [
       {title : "Home", url:"/", isVisible:true},
       {title : "Demos", url:"/demo", children:[
          {title:"Component1", url:"demo01", isVisible:true},
          {title:"Component2", url:"demo02", isVisible:true},
          {title:"Le binding", url:"demo03", isVisible:true},
          {title:"Les pipes", url:"demo04", isVisible:true},
          {title:"Les directives", url:"demo05", isVisible:true},
          {title:"Input-Output", url:"demo06", isVisible:true}


      ], isVisible: true},
       {title : "Exercices", url:"/exercise", children:[
          {title:"Modules", url:"exe01", isVisible:true},
          {title:"Directives", url:"exe02", isVisible:true},
          {title:"Chrono", url:"chrono", isVisible:true}

       ], isVisible: true}

    ]

}
