import { Component, OnInit, Input, Output } from '@angular/core';
import { Seller } from '../interfaces/seller';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {
  
  @Input()
  updateSeller: Seller;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  onClickOK() {
    this.activeModal.close(this.updateSeller);
  }

  onClickCancel () {
    this.activeModal.dismiss();
  }


}
