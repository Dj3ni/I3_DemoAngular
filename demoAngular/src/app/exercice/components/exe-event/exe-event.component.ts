import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exe-event',
  standalone: false,
  templateUrl: './exe-event.component.html',
  styleUrl: './exe-event.component.css'
})

export class ExeEventComponent {
    public eventForm : FormGroup

    constructor(private _formBuilder : FormBuilder){
      this.eventForm = _formBuilder.group({
        title : [null,[ 
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16)
        ]],
        description: [null,[
          Validators.maxLength(512)
        ]],
        date: [formatDate(new Date(),'yyyy-MM-dd','en'),[Validators.required]],
        allDay: [true,[]],
        startTime : [formatDate(new Date(), 'hh:mm','en'),[]],
        endTime : [formatDate(new Date().setHours(new Date().getHours()+1), 'hh:mm','en'),[]]
      })
    }

    public onSubmit():void {
      if(!this.eventForm.valid) throw new Error('Formulaire invalide')
        console.log(this.eventForm.value);
    }


}
