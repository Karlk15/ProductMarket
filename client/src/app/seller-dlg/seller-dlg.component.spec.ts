/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerDlgComponent } from './seller-dlg.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

describe('SellerDlgComponent', () => {
  let component: SellerDlgComponent;
  let fixture: ComponentFixture<SellerDlgComponent>;

  let mockModal = {
    open: jasmine.createSpy('modal.open').and.returnValue({ 
        result: { 
          then: jasmine.createSpy('modal.result.then') 
      } 
    }),
    close: jasmine.createSpy('modal.close'),
    dismiss: jasmine.createSpy('modal.dismiss')
  };

    let mockToastr = {
      warning: jasmine.createSpy('tostr.warning')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDlgComponent ],
      providers: [
        { provide: NgbActiveModal, useValue: mockModal },
        {provide: ToastrService, useValue: mockToastr}
      ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDlgComponent);
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
      component.updateSeller = {id: 1, name: 'kalli', category: 'things', imagePath: 'stuff'};

      // Act
      component.onClickOK();

      // Assert
      expect(mockModal.close).toHaveBeenCalledWith({id: 1, name: 'kalli', category: 'things', imagePath: 'stuff'});
    });


    it('should call toastrSerive.warning', () => {
      // Arrange
      component.updateSeller = {id: 1, name: '', category: 'things', imagePath: 'stuff'};

      // Act
      component.onClickOK();

      // Assert
      expect(mockToastr.warning).toHaveBeenCalled();
    });

  });
  


});
