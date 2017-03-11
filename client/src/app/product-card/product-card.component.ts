import { Component, OnInit, Input, Output } from '@angular/core';
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


    constructor() { }

  ngOnInit() {
  }

}
