import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  today:any;
  getdatetime(){
    this.today=new Date();
    return this.today;
  }

  increment=0;
}
