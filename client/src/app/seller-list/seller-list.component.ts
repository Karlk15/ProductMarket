import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellers: Seller[];

  constructor(private service: SellersService,
              private router: Router) { }

  ngOnInit() {

    // render list of all sellers
    this.service.getSellers().subscribe( allSellers => {
      this.sellers = allSellers;
    });

  }

  onClickSeller(seller: Seller) {
    
    this.router.navigate(['/seller', seller.id]);
  }

}
