import { Component, OnInit } from '@angular/core';
import { HttpDataRequestService } from '../http-data-request.service';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrls: ['./http-data.component.css']
})
export class HttpDataComponent implements OnInit {

  constructor(private ht:HttpDataRequestService, private fb:FormBuilder) { }
  myForm:any;
  postList:any;
  handlePost(data:any){
    console.log(data);
    this.postList=data;
    console.log(this.postList);
  }
  ngOnInit() {
    this.ht.getdata().subscribe((data) =>this.handlePost(data));
    this.myForm=this.fb.group({
      name:["james",Validators.required],
      email:["james@gmail.com",Validators.required],
      contact:[9547863211,[Validators.required,Validators.minLength(10)]]
    })
  }
  onSubmit(){
    //console.log(this.myForm.value);
    this.ht.sendPost(this.myForm.value).subscribe((data => console.log(data)));
  }
  
}
