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
products=[{

  "id":1,
  "productname":"Ginger",
  "price":15,
  "quntityavailable":"250gm",
  "presentstock":50,
  "imageurl":"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_421703.jpg"

},
{

  "id":2,
  "productname":"Ginger",
  "price":30,
  "quntityavailable":"500 gm",
  "presentstock":50,
  "imageurl":"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_421703.jpg"

},
{
  "id":3,
  "productname":"Ginger",
  "price":60,
  "quntityavailable":"1kg",
  "presentstock":"1kg",
  "imageurl":"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=400,h=400/app/images/products/full_screen/pro_421703.jpg"

}
]
@Output() productemmiter=new EventEmitter();
addtocart(product: any){
  this.productemmiter.emit(product)
}

}
