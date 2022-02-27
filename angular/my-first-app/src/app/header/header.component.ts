import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter = 0;
cartItems=[{
  "id":"",
  "productname":"",
  "price":"",
  "quntityavailable":"",
  "imageurl":""
}]
 
cart(product:any){
this.cartItems.push(product);
this.counter++;
}
}
