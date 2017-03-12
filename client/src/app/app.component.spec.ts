/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SellerListComponent} from './seller-list/seller-list.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { Router, RouterModule} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({  
      
      imports: [
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
      providers: [{provide: Router}],
      declarations: [
        AppComponent,
        SellerListComponent,
        SellerDetailsComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    TestBed.compileComponents();

  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Welcome to the Market Place'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to the Market Place');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Market Place');
  }));
  
});
