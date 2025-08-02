import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppUserService} from './app-user.service';

describe('AppUserService', () => {
  let service: AppUserService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUserService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
