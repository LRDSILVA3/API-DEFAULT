/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListSaleService } from './ListSale.service';

describe('Service: ListSale', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListSaleService]
    });
  });

  it('should ...', inject([ListSaleService], (service: ListSaleService) => {
    expect(service).toBeTruthy();
  }));
});
