import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  inputs: ['seconds']
})
export class CountdownComponent implements OnInit {

  @Input() 
  seconds: number = 25;

  intervalId: NodeJS.Timer;

  @Output() 
  complete: EventEmitter<any> = new EventEmitter();

  constructor()
  { 
    this.seconds = 25;
    this.intervalId = setInterval(()=>this.tick(), 1000);
  }

  private tick(): void 
  {
    if(--this.seconds < 1)
    {
      clearInterval(this.intervalId);
      this.complete.emit(null);
    }
  }

  ngOnInit()
  {
  }

}
