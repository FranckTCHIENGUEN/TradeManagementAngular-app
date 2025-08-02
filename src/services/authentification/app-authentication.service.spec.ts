import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppAuthenticationService} from './app-authentication.service';

describe('AppAuthenticationService', () => {
  let service: AppAuthenticationService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAuthenticationService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
