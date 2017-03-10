/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SellerListComponent} from './seller-list/seller-list.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { Router, RouterModule} from '@angular/router';

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
      providers: [{
        provide: Router
      }],
      declarations: [
        AppComponent,
        SellerListComponent,
        SellerDetailsComponent
      ]
    });

    TestBed.compileComponents();

  });

  fit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
  */
});
