/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SellerDetailsComponent } from './seller-details.component';
import { MockService } from '../mock.service';
import { SellersService } from '../sellers.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../interfaces/product';
import { } from 'jasmine';


describe('SellerDetailsComponent', () => {
  let component: SellerDetailsComponent;
  let fixture: ComponentFixture<SellerDetailsComponent>;

  let mockService = new MockService();

  let mockRouter = {
	  navigate: jasmine.createSpy("navigate")	
  };

  let mockToastr = {
    success: jasmine.createSpy('toastr.success'),
    error: jasmine.createSpy('tostr.error')
  }

  let mockModal = {
    open: jasmine.createSpy('modal.open').and.returnValue({ result: { then: jasmine.createSpy('modal.result.then') } }),
    close: jasmine.createSpy('modal.close'),
    dismiss: jasmine.createSpy('modal.dismiss'),
  };

  let mockParams = {
    params: Observable.of({id: 0})  
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDetailsComponent ],
      providers: [
        { provide: SellersService, useValue: mockService },
        { provide: Router, useValue: mockRouter},
        { provide: ActivatedRoute, useValue:  mockParams },
        { provide: NgbModal, useValue: mockModal},
        { provide: ToastrService, useValue: mockToastr }
      ],
      imports: [NgbModule.forRoot() ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.showAlert).toBeFalsy();
  });

  describe('when TopTen is called', () => {
      

    it('quantitySold should equal 30(biggest number of seller with id = 0)', () => {

    const topList: Product[] = [
      {id: 0, name: 'one', price: 1, quantitySold: 10, quantityInStock: 1, imagePath: 'one'},
      {id: 1, name: 'two', price: 1, quantitySold: 5, quantityInStock: 1, imagePath: 'two'},
      {id: 2, name: 'three', price: 1, quantitySold: 2, quantityInStock: 1, imagePath: 'three'},
     ];
      
      // Act
      const actualList = component.TopTen();

      // Assert
      expect(actualList[0].quantitySold).toEqual(30);

    });


  });

});
