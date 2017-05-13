import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';

@NgModule({
  declarations: [
    PomodoroTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PomodoroTimerComponent]
})
export class AppModule { }
