import { Component, OnInit } from '@angular/core';
import { Seller } from '../interfaces/seller';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})
export class SellerDlgComponent implements OnInit {

  private newSeller: Seller;

  constructor() { }

  ngOnInit() {
    
  }

}
