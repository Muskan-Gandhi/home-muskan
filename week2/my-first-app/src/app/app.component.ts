import { Component } from '@angular/core';
import { DateTimeService } from './date-time.service';
import { HttpDataRequestService } from './http-data-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  constructor(public dt:DateTimeService, public ht:HttpDataRequestService){}
  day=this.dt.getdatetime();

  ngOnInit(){
    this.ht.getdata().subscribe((data) => console.log(data));
  }

}
