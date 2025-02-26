import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  standalone: false,
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.css'
})

export class ChronoComponent {
  public minutes : number = 0;
  public seconds : number = 0;
  public intervalId: any = null; // plutôt utiliser undefined
  public isRunning : boolean = false;
  public isPaused : boolean = false;
  

  public StartChrono(): void{
    if(this.intervalId) return;
    this.isRunning = true;
    this.intervalId = setInterval(()=>{

      this.seconds++;
      if(this.seconds == 60){
        this.minutes++;
        this.seconds = 0;
      }  
    },1000)
  }

  public PauseChrono():void{
    if(this.intervalId){
      clearInterval(this.intervalId);
      this.intervalId = null; // pour reprendre quand on clique sur start
      this.isPaused = true;
    }
  }

  public StopChrono(){
    this.PauseChrono();
    this.minutes = 0;
    this.seconds = 0;
    this.isPaused = false;
    this.isRunning = false;
  }
  

  // Correction:


  public onStart():void{
    if (this.intervalId) throw new Error('Already running');//faire une erreur pour développeur 
    this.intervalId = setInterval(
      () => this.addSecond(),
      1000
    );
  }

  private addSecond():void {
    this.seconds++;
  }

  public onPause():void{
    if(this.intervalId){
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public onReset():void {
    if(this.seconds == 0) throw new Error("Already Initial value");
    if(this.seconds > 0) this.seconds = 0;
  }
}
