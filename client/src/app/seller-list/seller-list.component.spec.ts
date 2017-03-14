/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Type, NgModule, Input, Component } from '@angular/core';

import { SellerListComponent } from './seller-list.component';
import { MockService } from '../mock.service';
import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SellerDlgComponent } from '../seller-dlg/seller-dlg.component';
import { FormsModule } from '@angular/forms';
import { } from 'jasmine';

describe('SellerListComponent', () => {

  let component: SellerListComponent;
  let fixture: ComponentFixture<SellerListComponent>;

  let mockService = new MockService();

  
  let mockToastr = {
    success: jasmine.createSpy('toastr.success'),
    error: jasmine.createSpy('tostr.error')
  }

  let mockRouter = {
	  navigate: jasmine.createSpy('navigate')	
  };

  let mockModal = {
    result: {
        then: function(confirmCallback, cancelCallback) {
            //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
            this.confirmCallBack = confirmCallback;
            this.cancelCallback = cancelCallback;
        },
        catch: function (cancelCallback) {
            this.cancelCallback = cancelCallback;
            return this;
        }
    },
    close: function( item ) {
        //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
        this.result.confirmCallBack( item );
    },
    dismiss: function( type ) {
        //The user clicked cancel on the modal dialog, call the stored cancel callback
        this.result.cancelCallback( type );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListComponent ],
      providers: [
        {provide: SellersService, useValue: mockService},
        {provide: Router, useValue: mockRouter},
        {provide: NgbModal, useValue: mockModal},
        {provide: ToastrService, useValue: mockToastr}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when onClickSeller is called', () => {

    it('should route to seller/1', () => {
      // Act
      component.onClickSeller(1);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/seller', 1]);
    });

  });


  describe('when onAddSellerClicked is called', () => {
    xit('should open modal', () => {
      spyOn(component, 'onAddSellerClicked').and.returnValue(mockModal);

    });
  });

});
