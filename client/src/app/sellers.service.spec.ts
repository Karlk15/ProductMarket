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

  it('should get single seller by id', async(() => {
    let sellersService: SellersService = getTestBed().get(SellersService);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        expect(connection.request.url).toMatch('http://localhost:5000/api/sellers/2');
        connection.mockRespond(
          new Response(
            new ResponseOptions({
              body: {
                id: 2,
                name: 'Keli',
                category: 'Pandas',
                imagePath: 'http://imgur.com/r/panda/xhE1cN4'
              }
            }))
        );
      }
    );
    
    sellersService.getSellerById(2).subscribe((seller) => {
      expect(seller.id).toBe(2);
      expect(seller.name).toBe('Keli');
      expect(seller.category).toBe('Pandas');
      expect(seller.imagePath).toBe('http://imgur.com/r/panda/xhE1cN4');
    });

  }));

});