import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) { }
  url="http://jsonplaceholder.typicode.com/users";

  getdata(){
    //console.log(this.ht.get(this.url));
    return this.ht.get(this.url);
  }
  sendPost(data:any){
    return this.ht.post(this.url,data);
  }
  updatePost(){
    
  }
}
