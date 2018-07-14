import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent
  ],
  providers: [], // Means Services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
