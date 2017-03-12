/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerDlgComponent } from './seller-dlg.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('SellerDlgComponent', () => {
  let component: SellerDlgComponent;
  let fixture: ComponentFixture<SellerDlgComponent>;

  let mockModal = {
        open: jasmine.createSpy('modal.open').and.returnValue({ result: { then: jasmine.createSpy('modal.result.then') } }),
        close: jasmine.createSpy('modal.close'),
        dismiss: jasmine.createSpy('modal.dismiss')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDlgComponent ],
      providers: [
        { provide: NgbActiveModal, useValue: mockModal },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

});
