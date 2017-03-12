import { Component, OnInit, Input, Output } from '@angular/core';
import { Seller } from '../interfaces/seller';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {
  
  @Input()
  updateSeller: Seller;


  constructor(public activeModal: NgbActiveModal,
              private toastrService: ToastrService) { 
                //toastrConfig.timeOut = 1000;
                //toastrConfig.maxOpened = 0;
                this.updateSeller = {id: undefined, name: '', category: '', imagePath: ''}
                
               }

  ngOnInit() {

  }

  onClickOK() {
    if(!this.isEmptyOrSpaces(this.updateSeller.name)) {
      this.activeModal.close(this.updateSeller);
    } else {
      this.toastrService.warning('Name is required', 'Invalid input');
    }
    
  }

  onClickCancel () {
    this.activeModal.dismiss();
  }

  private isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

}
