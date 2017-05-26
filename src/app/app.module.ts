import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TaskComponent, TaskIconsComponent, FormattedTimePipe, QueuedOnlyPipe, TaskTooltipDirective } from './pomodoro-task';

@NgModule({
  declarations: [ TaskComponent, TaskIconsComponent, FormattedTimePipe, QueuedOnlyPipe, TaskTooltipDirective ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskComponent]
})
export class AppModule { }
