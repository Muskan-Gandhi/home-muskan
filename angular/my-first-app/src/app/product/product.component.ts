import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output() productEventEmitter = new EventEmitter<any>();
addtocart(){
  this.productEventEmitter.emit("add");
}
}
