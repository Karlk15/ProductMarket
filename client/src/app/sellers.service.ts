import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Seller } from './interfaces/seller';
import { Product } from './interfaces/product';
@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers(): Observable<Seller[]> {

    return this.http.get('http://localhost:5000/api/sellers')
      .map(response => {
        return <Seller[]>response.json();
      });

  }

  getSellerById(id: number): Observable<Seller> {

    return this.http.get(`http://localhost:5000/api/sellers/${id}`)
      .map(response => {
        return <Seller>response.json();
      });
  }

  addSeller(newSeller: Seller) : Observable<Seller> {

    return this.http.post('http://localhost:5000/api/sellers', newSeller)
      .map(response => {
        return <Seller> response.json();
      });

  }

  getProductsById(id: number): Observable<Product> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/products`)
      .map(response => {
        return <Product>response.json();
      });
  }

}
