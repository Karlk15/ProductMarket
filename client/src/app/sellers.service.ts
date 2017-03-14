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

        
  addOrEditSeller(newSeller: Seller): Observable<number> {
    if(newSeller.id !== undefined) {
      return this.http.put(`http://localhost:5000/api/sellers/${newSeller.id}`, newSeller)
        .map(response => {
          return response.status;
        });
    }
    else {
      return this.http.post('http://localhost:5000/api/sellers', newSeller)
        .map(response => {
          return response.status;

        });
    }
  }

  addOrEditProduct(newProduct: Product,sellerID: number): Observable<number> {
    if(newProduct.id !== undefined) {
      return this.http.put(`http://localhost:5000/api/sellers/${sellerID}/products/${newProduct.id}`, newProduct)
        .map(response => {
          return response.status;
        });
    }
    else {
      return this.http.post(`http://localhost:5000/api/sellers/${sellerID}/products`, newProduct)
        .map(response => {
          return response.status;
        });
    }
  }

  getProductsById(id: number): Observable<Product[]> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/products`)
      .map(response => {
        return <Product[]>response.json();
      });
  }

}
