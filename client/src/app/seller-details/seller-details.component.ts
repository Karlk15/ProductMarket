import { Component, OnInit } from '@angular/core';
import { SellersService} from '../sellers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seller } from '../interfaces/seller';
import { Observable } from 'rxjs/Rx';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { ProductDlgComponent } from '../product-dlg/product-dlg.component';
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
  private showAlert: Boolean;
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

    this.service.getProductsById(this.sellerID).subscribe(
      allProducts => {                // able to get all products
        this.products = allProducts; 

        if(this.products.length === 0) {
          this.showAlert = true;
        } else {
          this.showAlert = false;
        }

      }, 
      error => {                      // not able to get all products (because seller does not exist)
        this.toastrService.error('Seller number ' + this.sellerID + ' does not exist', 'Seller not found'); 
      }
    );

    this.service.getSellerById(this.sellerID).subscribe(
      details => { this.sellerDetails = details; }, // particular seller does exist
      error => {                                    // particular seller does no exist
        this.toastrService.error('Seller number ' + this.sellerID + ' does not exist', 'Seller not found');
        this.router.navigate(['/sellers']); 
      }
    );
  }

  onEditProduct(updatedProduct: Product) {
    
    const productDlgInstance = this.modalService.open(ProductDlgComponent);

    const oldProductName = updatedProduct.name;

    productDlgInstance.componentInstance.updateProduct = updatedProduct;
    
    productDlgInstance.result.then(updateProduct => { 
      // call addOrEditProduct func in service to put updated product to server
      this.service.addOrEditProduct(updateProduct, this.sellerID).subscribe( updatedProduct => {
        location.reload();
        this.toastrService.success(oldProductName + ' was updated' , 'Product updated');
      });    
    }).catch( err => {
      location.reload();
      this.toastrService.error('Your changes were not submitted', 'Operation Canceled');
    });

  }

  onAddProduct() {
    const productDlgInstance = this.modalService.open(ProductDlgComponent);
    
    productDlgInstance.result.then(updateProduct => { 
      // call addOrEditProduct func in service to put updated product to server
      this.service.addOrEditProduct(updateProduct, this.sellerID).subscribe( updatedProduct => {
        location.reload();
        this.toastrService.success(updatedProduct.name + ' was added to product list' , 'Product added');
      });    
    }).catch( err => {
      location.reload();
      this.toastrService.error('Your changes were not submitted', 'Operation Canceled');
    });

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
      this.service.addOrEditSeller(updateSeller).subscribe( updatedSeller => {
        location.reload();
        this.toastrService.success(oldSellerName + ' was updated' , 'Seller updated');
      });    
    }).catch( err => {
      this.toastrService.error('Your changes were not submitted', 'Operation Canceled');
    });

  }
}
