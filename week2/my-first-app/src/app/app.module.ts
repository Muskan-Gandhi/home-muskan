import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimeService } from './date-time.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
