import { Injectable } from '@angular/core';
import { IPerson } from '../models/iperson';


const KEY: string = 'guests';

@Injectable({
  providedIn: 'root'
})
export class GuestsSessionService{
  private guests : IPerson[];

  constructor() { 
    this.guests = this.getGuests()
  }

  public getGuests() : IPerson[]{
    return JSON.parse(sessionStorage.getItem(KEY) ?? '[]') as IPerson[]; 
  }

  public addGuest(newGuest : IPerson):void{
    this.guests = this.getGuests()
    if(this.guests.indexOf(newGuest) > -1) throw new Error('Already invited')
    this.guests.push(newGuest)
    sessionStorage.setItem(KEY, JSON.stringify(this.guests))
  }
}
