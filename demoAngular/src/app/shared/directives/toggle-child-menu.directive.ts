import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleChildMenu]',
  standalone: false
})
export class ToggleChildMenuDirective {

  constructor(private _htmlElement : ElementRef) { }

  @HostListener('click')
  public onClick():void {
    const html_childMenu = this._htmlElement.nativeElement.querySelector("ul.childMenu");
    html_childMenu.classList.toggle("hiddenMenu");    
  }
}
