import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../date-time.service';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public dt: DateTimeService) { }

  ngOnInit(): void {
  }

  counter() {
    return this.dt.increment++;
  }
}
