import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { PomodoroTimerModule } from './pomodoro-timer/pomodoro-timer.module';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule, 
    PomodoroTimerModule
  ],
  providers: [],
  bootstrap: [PomodoroTimerComponent]
})
export class AppModule { }
