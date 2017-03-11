/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerListComponent } from './seller-list.component';
import { MockService } from '../mock.service';
import { SellersService } from '../sellers.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { } from 'jasmine';

describe('SellerListComponent', () => {
  let component: SellerListComponent;
  let fixture: ComponentFixture<SellerListComponent>;

  let mockService = new MockService();

  let mockRouter = {
	  navigate: jasmine.createSpy("navigate")	
  };

  let mockModal = {
        open: jasmine.createSpy('modal.open').and.returnValue({ result: { then: jasmine.createSpy('modal.result.then') } }),
        close: jasmine.createSpy('modal.close'),
        dismiss: jasmine.createSpy('modal.dismiss')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListComponent ],
      providers: [
        {provide: SellersService, useValue: mockService},
        {provide: Router, useValue: mockRouter},
        {provide: NgbModal, useValue: mockModal},
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
});
