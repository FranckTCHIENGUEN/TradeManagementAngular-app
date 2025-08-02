import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppProductService} from './app-product.service';

describe('AppProductService', () => {
  let service: AppProductService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppProductService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
