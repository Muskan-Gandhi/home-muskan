import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { UserInformationService } from './user-information.service';
import { DateTimeService } from './date-time.service';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ReactiveFormsModuleComponent } from './reactive-forms-module/reactive-forms-module.component';
import { HttpDataComponent } from './http-data/http-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ReactiveFormsModuleComponent,
    HttpDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DateTimeService,UserInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
