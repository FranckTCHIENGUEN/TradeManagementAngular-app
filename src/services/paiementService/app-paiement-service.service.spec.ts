import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppPaiementServiceService} from './app-paiement-service.service';

describe('AppPaiementServiceService', () => {
  let service: AppPaiementServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPaiementServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
