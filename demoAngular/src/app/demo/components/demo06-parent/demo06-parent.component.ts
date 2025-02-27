import { Component } from '@angular/core';
import { IStudent } from '../../../models/istudent';

@Component({
  selector: 'app-demo06-parent',
  standalone: false,
  templateUrl: './demo06-parent.component.html',
  styleUrl: './demo06-parent.component.css'
})
export class Demo06ParentComponent {

    
    public students : IStudent[] = [
      {firstname : 'Michael', lastname : 'J Fox'},
    {firstname : 'Christopher', lastname : 'Loyd'},
    {firstname : 'Sam', lastname : 'Neil'},
    {firstname : 'Sandra', lastname : 'Bullock'},
    {firstname : 'Laura', lastname : 'Dern'}
    ]

    
    public passToTopOne(student : IStudent): void {
      let index : number = this.students.indexOf(student);
      if(index == -1) throw new Error("Student not in the list")
      this.students.splice(index,1);
      this.students.unshift(student);    
    }
}
