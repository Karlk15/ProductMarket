import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SellerListComponent} from './seller-list/seller-list.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellersService } from './sellers.service';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    SellerDetailsComponent,
    SellerDlgComponent,
    ProductCardComponent,
    ProductDlgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    }, {
        path: 'sellers',
        component: SellerListComponent
      }, {
        path: 'seller/:id',
        component: SellerDetailsComponent
      }])
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDlgComponent, ProductDlgComponent]
})
export class AppModule { }
