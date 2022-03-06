import { Component } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  constructor(private dt:DateTimeService){}
  day=this.dt.getdatetime();
}
