import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo08-forms',
  standalone: false,
  templateUrl: './demo08-forms.component.html',
  styleUrl: './demo08-forms.component.css'
})
export class Demo08FormsComponent {
    public myForm : FormGroup


  constructor(private _formBuilder : FormBuilder){
    this.myForm = this._formBuilder.group({
      firstname : [null,[Validators.required]],
      lastname : [null,[Validators.required]],
      birthdate : [formatDate(new Date(),'yyyy-MM-dd','en'),[Validators.required]],
      guests : this._formBuilder.array([])
    })
  }

  public SubmitForm() : void {
    if(!this.myForm.valid) throw new Error('Formulaire invalide');
    console.log(JSON.stringify(this.myForm.value));
  }

  public getGuestArray():FormArray{
    return this.myForm.get('guests') as FormArray;
  }

  public addNewGuestForm():void{
    this.getGuestArray().push(this._formBuilder.group({
      firstname : [null,Validators.required],
      lastname : [null,Validators.required],
      birthdate : [null,Validators.required],
    }))
  }

}
