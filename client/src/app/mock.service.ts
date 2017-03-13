import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Seller } from './interfaces/seller';

@Injectable()
export class MockService {

  private sellerList: Seller[];

  constructor() { 
    this.sellerList = [];
    this.sellerList.push({id: 0, name: 'Kalli', category: 'Womens Clothing', imagePath: 'http://imgur.com/gallery/etjgJ2D'});
    this.sellerList.push({id: 1, name: 'Keli', category: 'Pandas', imagePath: 'http://imgur.com/r/panda/xhE1cN4'});
    this.sellerList.push({id: 2, name: 'Danni', category: 'Cats', imagePath: 'http://imgur.com/r/cats/xXYgX7h'});    
  }

  getSellers() : Observable<Seller[]> {
    return Observable.of(this.sellerList);
  }

  // TODO implemented actual edit on array
  addOrEditSeller(newSeller: Seller) : Observable<Seller> {
    if(newSeller.id !== undefined) {
      //this.sellerList.find(newSeller.id);
      return Observable.of(newSeller);
    } else {
      this.sellerList.push(newSeller);
      return Observable.of(newSeller);
    }
  }


}
