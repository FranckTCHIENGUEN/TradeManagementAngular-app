import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppVenbteServiceService } from './app-venbte-service.service';

describe('AppVenbteServiceService', () => {
  let service: AppVenbteServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppVenbteServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
