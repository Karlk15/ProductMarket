import { Component, OnInit } from '@angular/core';
import { SellersService, Seller } from '../sellers.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  private sellerDetails: Seller;
  private sellerID: number;

  constructor(private service: SellersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sellerID = this.route.snapshot.params['id'];

    //this.
  }

}
