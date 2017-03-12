import { Component, OnInit } from '@angular/core';
import { SellersService} from '../sellers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seller } from '../interfaces/seller';
import { Observable } from 'rxjs/Rx';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  private sellerDetails: Seller;
  private sellersService: SellersService;
  private sellerID: number;
  private products: Product[];


  constructor(private service: SellersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.sellerID = +params['id'];
    console.log(this.sellerID);
    })

    this.service.getProductsById(this.sellerID).subscribe(allProducts => {
      this.products = allProducts;
    });
  }

}
