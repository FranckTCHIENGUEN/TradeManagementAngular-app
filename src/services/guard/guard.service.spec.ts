import {TestBed, waitForAsync} from '@angular/core/testing';

import {GuardService} from './guard.service';

describe('GuardService', () => {
  let service: GuardService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
