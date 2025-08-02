import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppServiceService} from './app-service.service';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
