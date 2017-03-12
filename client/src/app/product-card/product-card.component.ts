import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  sellerProduct: Product;

  @Output()
  sellerProductUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // virkar ekki af eh ástæðu ??
  onEdit() {
    this.sellerProduct.product.name = "smuuu";
    this.sellerProductUpdated.emit(this.sellerProduct);
  }
  // tengist eg property
}
