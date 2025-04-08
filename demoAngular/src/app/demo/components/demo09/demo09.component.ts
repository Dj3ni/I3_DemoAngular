import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from '../../../models/iperson';
import { SessionService } from '../../../services/session.service';
import { GuestsSessionService } from '../../../services/guests-session.service';

@Component({
  selector: 'app-demo09',
  standalone: false,
  templateUrl: './demo09.component.html',
  styleUrl: './demo09.component.css'
})
export class Demo09Component {

  public myForm : FormGroup
  public guests : IPerson[];

  constructor(
    private _fb : FormBuilder,
    private _session : SessionService,
    private _guestSessionService : GuestsSessionService
  ){
    // this.myForm = this._fb.group({
    //   guestFirstName : [null, [Validators.required]],
    //   guestLastName : [null, [Validators.required]]
    // })
    //avec SessionService: 
    //this.guests = this._session.getItem('guests') ?? [] // pour récupérer les infos du local storage sinon ce sera tjs vide
    this.guests = this._guestSessionService.getGuests();
    this.myForm = this.initFormGuest()
  }

  public onSubmit():void{
    if(!this.myForm.valid)throw new Error ('Invalid Form')
      this._guestSessionService.addGuest(this.convertToIPerson(this.myForm))
    //this.guests.push(this.convertToIPerson(this.myForm));
    this.guests = this._guestSessionService.getGuests();
    //this._session.setItem('guests',this.guests)
    this.myForm = this.initFormGuest()
  }

  public initFormGuest():FormGroup{
    return this._fb.group({
      guestFirstName : [null, [Validators.required]],
      guestLastName : [null, [Validators.required]]        
    })
}

  public convertToIPerson(form : FormGroup): IPerson{
    return {
      firstname : form.value.guestFirstName,
      lastname : form.value.guestLastName
    }
  }

  
  

}
