/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerDetailsComponent } from './seller-details.component';
import { MockService } from '../mock.service';
import { SellersService } from '../sellers.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

describe('SellerDetailsComponent', () => {
  let component: SellerDetailsComponent;
  let fixture: ComponentFixture<SellerDetailsComponent>;

  let mockService = new MockService();

  let mockRouter = {
	  navigate: jasmine.createSpy("navigate")	
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDetailsComponent ],
      providers: [
        { provide: SellersService, useValue: mockService },
        { provide: Router, useValue: mockRouter},
        { provide: ActivatedRoute, useValue: { params: Observable.of({id: 1}) } },
      ]
    })
    .compileComponents()

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  }));
});
