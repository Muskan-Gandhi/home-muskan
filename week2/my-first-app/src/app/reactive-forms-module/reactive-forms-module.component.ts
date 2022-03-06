import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInformationService } from '../user-information.service';

@Component({
  selector: 'app-reactive-forms-module',
  templateUrl: './reactive-forms-module.component.html',
  styleUrls: ['./reactive-forms-module.component.css']
})
export class ReactiveFormsModuleComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm:any;
  ngOnInit(): void {
    this.myForm=this.fb.group({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      city: new FormControl('',Validators.required),
      contact:new FormControl('',[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      todate:new FormControl('',Validators.required),
      fromdate:new FormControl('',Validators.required),
      days:new FormControl('',[Validators.required])
      });
  }
  getdate(date:any){
    return new Date(date);
  }
  getdays(tdate:any,fdate:any){
    var days = (fdate.getTime() - tdate.getTime())/(1000 * 3600 * 24);
    return days;
  }
  onSubmit(form: FormGroup){
    console.log('valid?',form.valid);
    console.log("Firstname",form.value.firstname);
    console.log("lastname",form.value.lastname);
    console.log("Email",form.value.email);
    console.log("City ",form.value.city);
    console.log("Contact",form.value.contact);
    console.log("Date",this.getdate(form.value.todate));
    console.log("Date",this.getdate(form.value.fromdate));
    console.log("Days",this.getdays(this.getdate(form.value.todate),this.getdate(form.value.fromdate)));
  }
}
