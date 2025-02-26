import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat',
  standalone: false
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {
    let minutes : number = Math.floor(value /60);
    let seconds : number = value % 60;
    return `${minutes} minute${(value > 1)? 's':''} ${seconds} second${(value > 1)? 's':''}`
    // return `${value} seconde${(value>1)?'s':''}`;
  }

}
