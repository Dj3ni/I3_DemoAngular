import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // selector = selecteur css
  standalone: false
})
export class HighlightDirective {
  private _elementStyle : any;

  constructor(private _htmlElement : ElementRef) { 
    this._elementStyle = _htmlElement.nativeElement.style
  }

  @HostListener('mouseover')
  public OnMouseOver() :void{
    this._htmlElement.nativeElement.style.backgroundColor = "yellow";
    this._htmlElement.nativeElement.style.fontWeight = "bolder";
  }

  @HostListener('mouseleave')
  public OnMouseLeave() :void{
    this._htmlElement.nativeElement.style = this._elementStyle
  }
}
