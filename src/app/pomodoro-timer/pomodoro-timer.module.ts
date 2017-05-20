import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroTimerComponent } from './pomodoro-timer.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PomodoroTimerComponent, CountdownComponent ],
})
export class PomodoroTimerModule { }
