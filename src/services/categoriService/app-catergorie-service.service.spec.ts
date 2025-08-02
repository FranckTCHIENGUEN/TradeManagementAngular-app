import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppCatergorieServiceService} from './app-catergorie-service.service';

describe('AppCatergorieServiceService', () => {
  let service: AppCatergorieServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCatergorieServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
