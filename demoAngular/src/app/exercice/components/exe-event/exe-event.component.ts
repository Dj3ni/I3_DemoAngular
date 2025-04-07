import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exe-event',
  standalone: false,
  templateUrl: './exe-event.component.html',
  styleUrl: './exe-event.component.css'
})
export class ExeEventComponent {
    public eventForm? : FormGroup

    constructor(private _formBuilder : FormBuilder){
      this.eventForm = _formBuilder.group({
        title : [null, 
          [Validators.required],
          [Validators.minLength(2)],
          [Validators.maxLength(16)]
        ],
        description: [null,[
          
        ]]
      })
    }


}
