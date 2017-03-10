/* tslint:disable:no-unused-variable */
import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SellersService } from './sellers.service';
import { Seller } from '../interfaces/seller';
import { } from 'jasmine';

describe('SellersService', () => {

  let mockBackend: MockBackend;

  beforeEach((async) => {
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


  it('should get sellers', done => {
    let sellersService: SellersService;

    getTestBed().compileComponents().then() => {
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

        sellersService = getTestBed().get(SellersService);
        expect(sellersService).toBeDefined();

        sellersService.getSellers().subscribe(
          (Seller) => {
            expect(Seller.id).toBe(2);
          })
    }
  })
  it('should ...', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
});