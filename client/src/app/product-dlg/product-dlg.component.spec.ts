/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { ProductDlgComponent } from './product-dlg.component';

describe('ProductDlgComponent', () => {
  let component: ProductDlgComponent;
  let fixture: ComponentFixture<ProductDlgComponent>;

   let mockModal = {
        close: jasmine.createSpy('modal.close'),
        dismiss: jasmine.createSpy('modal.dismiss')
  };

    let mockToastr = {
      warning: jasmine.createSpy('tostr.warning')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDlgComponent ],
      providers: [
        { provide: NgbActiveModal, useValue: mockModal },
        { provide: ToastrService, useValue: mockToastr }
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when onCLickCancel is called', () => {

    it('should call activeModal.dismiss()', () => {
      // Act
      component.onClickCancel();

      // Assert
      expect(mockModal.dismiss).toHaveBeenCalled();
    });

  });

  describe('when isEmptyOrSpaces is called', () => {

    it('should return true', () => {
      // Act
      const result = component.isEmptyOrSpaces('');

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false', () => {
      // Act
      const result = component.isEmptyOrSpaces('sdafsrgth');

      // Assert
      expect(result).toBeFalsy();
    });

  });

  describe('when onClickOK is called', () => {

    it('should call activeModal.close', () => {
      // Arrange
      const tempProduct = component.updateProduct = {id: 1, name: 'siggi', price: 252, quantitySold: 54, quantityInStock: 543, imagePath: 'dsgsf'};

      // Act
      component.onClickOK();

      // Assert
      expect(mockModal.close).toHaveBeenCalledWith(tempProduct);
    });


    it('should call toastrSerive.warning', () => {
      // Arrange
      component.updateProduct = {id: 1, name: '', price: 252, quantitySold: 54, quantityInStock: 543, imagePath: 'dsgsf'};

      // Act
      component.onClickOK();


      // Assert
      expect(mockToastr.warning).toHaveBeenCalled();
    });

  });

});
