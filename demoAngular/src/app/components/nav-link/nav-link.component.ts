import { Component, Input } from '@angular/core';
import { ILink } from '../../models/ilink';

@Component({
  selector: 'app-nav-link',
  standalone: false,
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {

  // Va chercher l'objet Link chez le parent
  @Input()
  public link!: ILink;

  @Input()
  public parentUrl? : string;
}
