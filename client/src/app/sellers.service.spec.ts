/* tslint:disable:no-unused-variable */
import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SellersService } from './sellers.service';
import { Seller } from './interfaces/seller';
import { } from 'jasmine';

describe('SellersService', () => {

  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SellersService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ],
      imports: [ HttpModule ]
    });
    mockBackend = getTestBed().get(MockBackend);
  });


  it('should get sellers', async(() => {
    let sellersService: SellersService = getTestBed().get(SellersService);
    
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [
              {
                id: 2,
                name: 'Danni',
                category: 'Cats',
                imagePath: 'http://imgur.com/r/cats/xXYgX7h'
              }]
          }
          )));
      });

      sellersService.getSellers().subscribe((seller) => {
          expect(seller.length).toBe(1);
          expect(seller[0].id).toBe(2);
          expect(seller[0].name).toBe('Danni');
          expect(seller[0].category).toBe('Cats');
          expect(seller[0].imagePath).toBe('http://imgur.com/r/cats/xXYgX7h');
      });
  }));
});