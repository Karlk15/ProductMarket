import { Component, OnInit } from '@angular/core';
import { SellersService} from '../sellers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seller } from '../interfaces/seller';
import { Observable } from 'rxjs/Rx';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {

  private sellerDetails: Seller;
  private sellerID: number;
  private products: Product[];
  private topTenProduct: Product[] = new Array(10);

  constructor(private service: SellersService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sellerID = +params['id'];
    });

    this.service.getProductsById(this.sellerID).subscribe(allProducts => {
      this.products = allProducts;
    });

    this.service.getSellerById(this.sellerID).subscribe(details => {
      this.sellerDetails = details;
    });
  }

  onProductEdited(p: Product) {
    console.log(p);
  }

  TopTen(): Product[] {

    function compare(a, b) {
      if (a.quantitySold > b.quantitySold)
        return -1;
      if (a.quantitySold < b.quantitySold)
        return 1;
      return 0;
    }

    let sortedProducts = this.products.slice();
    sortedProducts = sortedProducts.sort(compare);

    for (let i = 0; i < 10; i++) {
      this.topTenProduct[i] = sortedProducts[i];
    }
    return this.topTenProduct;
  }

  onEditSeller() {

    const sellerDlgInstance = this.modalService.open(SellerDlgComponent);

    const oldSellerName = this.sellerDetails.name;

    sellerDlgInstance.componentInstance.updateSeller = this.sellerDetails;

    sellerDlgInstance.result.then(updateSeller => {
      // call addSeller func in service to put updated seller to server
      this.service.addOrEditSeller(updateSeller).subscribe(updatedSeller => {
        this.toastrService.success(' was updated to ' + updateSeller.name, oldSellerName);
      });
    }).catch(err => {
      this.toastrService.error('Your changes were not submitted', 'Operation Canceled');
    });
  }
}
