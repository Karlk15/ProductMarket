import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Seller } from './interfaces/seller';
import { Product } from './interfaces/product';

@Injectable()
export class MockService {

  


  private sellerList: Seller[];
  private productList: MockProduct[];

  constructor() { 
    this.sellerList = [];
    this.sellerList.push({id: 0, name: 'Kalli', category: 'Womens Clothing', imagePath: 'http://imgur.com/gallery/etjgJ2D'});
    this.sellerList.push({id: 1, name: 'Keli', category: 'Pandas', imagePath: 'http://imgur.com/r/panda/xhE1cN4'});
    this.sellerList.push({id: 2, name: 'Danni', category: 'Cats', imagePath: 'http://imgur.com/r/cats/xXYgX7h'}); 



    this.productList = [];
    this.productList.push({id: 0, product: {id: 0, name: 'Kalli', price: 100, quantitySold: 20, quantityInStock: 10, imagePath: 'img1'}});
    this.productList.push({id: 0, product: {id: 1, name: 'Keli', price: 200, quantitySold: 30, quantityInStock: 20, imagePath: 'img2'}});
    this.productList.push({id: 1, product: {id: 2, name: 'Danni', price: 300, quantitySold: 40, quantityInStock: 300, imagePath: 'img3'}});
  }

  getSellers() : Observable<Seller[]> {
    return Observable.of(this.sellerList);
  }

  getSellerById(id: number): Observable<Seller> {
    let seller: Seller;

    for(let s of this.sellerList){
      if(s.id === id){
        seller = s;
      }
    }

    return Observable.of(seller);
  }

  getProductsById(id: number): Observable<Product[]> {
    let products: Product[] = [];

    for(let p of this.productList){
      if(p.id === id){
        products.push(p.product);
      }
    }

    return Observable.of(products);
  }


}

export interface MockProduct {
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    quantitySold: number;
    quantityInStock: number;
    imagePath: string;
  }
};