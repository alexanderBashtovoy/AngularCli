import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CountdownComponent } from './countdown/countdown.component'

// Pomodoro timer component
@Component({
  selector: 'pomodoro-timer',
  templateUrl: 'pomodoro-timer.template.html',
  styleUrls: ['css/styles.css'],
  inputs: []
})
export class PomodoroTimerComponent {
  //countdownTimer: CountdownComponent = new CountdownComponent();
  @Input()
  countdown: CountdownComponent = new CountdownComponent();

  LOGO: string;

  onCountdownCompleted(): void
  {
    alert('Time up!');
  }

  constructor() 
  {
    this.LOGO = require('./img/pomodoro.png');
    this.countdown.seconds = 26;
  }
}

