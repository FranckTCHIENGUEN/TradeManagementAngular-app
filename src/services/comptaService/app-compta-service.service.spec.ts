import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppComptaServiceService} from './app-compta-service.service';

describe('AppComptaServiceService', () => {
  let service: AppComptaServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppComptaServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
