/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Type, NgModule, Input, Component, Injectable, ViewChild, OnDestroy, getDebugNode } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SellerListComponent } from './seller-list.component';
import { MockService } from '../mock.service';
import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalModule, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
    open: jasmine.createSpy('modal.open').and.returnValue({ 
        result: { 
          then: jasmine.createSpy('modal.result.then'),
          catch: jasmine.createSpy('')
      } 
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListComponent ],
      providers: [
        {provide: SellersService, useValue: mockService},
        {provide: Router, useValue: mockRouter},
        {provide: NgbModal, useValue: mockModal},
        {provide: ToastrService, useValue: mockToastr}
      ],
      imports: [ CommonModule, NgbModalModule.forRoot() ]
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


  describe('when onAddSeller is called', () => {
    xit('should call addOrEditSeller()', () => {

      spyOn(component, 'onAddSeller');

      component.onAddSeller();

      expect(mockService.addOrEditSeller).toHaveBeenCalled();
    });
  });


});
