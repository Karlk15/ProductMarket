import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-dlg',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  @Input()
  updateProduct: Product;

  constructor(public activeModal: NgbActiveModal,
              private toastrService: ToastrService) {

                // initlized so unit tests can run without name = undefined error
                this.updateProduct = {id: undefined, name: '', price: undefined, quantitySold: undefined, quantityInStock: undefined, imagePath: ''};
               }

  ngOnInit() {
  }

  onClickOK() {
    
    if(!this.isEmptyOrSpaces(this.updateProduct.name) && this.updateProduct.price > 0) {
      this.activeModal.close(this.updateProduct);
    } else {
      this.toastrService.warning('Name or price are invalid', 'Invalid input');
    }
    
  }

  onClickCancel () {
    this.activeModal.dismiss();
  }

  isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

}
