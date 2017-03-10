import { Component, OnInit } from '@angular/core';
import { SellersService } from '../sellers.service';
import { Seller } from '../interfaces/seller';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellers: Seller[];

  constructor(private service: SellersService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {

    // get list of all sellers
    this.service.getSellers().subscribe(allSellers => {
      this.sellers = allSellers;
    });

  }

  onClickSeller(seller: Seller) {
    this.router.navigate(['/seller', seller.id]);
  }

  onAddSeller() {

    const sellerDlgInstance = this.modalService.open(SellerDlgComponent);

    sellerDlgInstance.componentInstance.updateSeller = {id: undefined, name: '', category: '', imagePath: ''};
    
    sellerDlgInstance.result.then(obj => {
      console.log("Dialog closed");
      console.log(obj);
    }).catch( err => {
      console.log("Dialog canceled");
      console.log(err);
    });

  }

}
