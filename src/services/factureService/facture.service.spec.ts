import { TestBed, waitForAsync } from '@angular/core/testing';

import { FactureService } from './facture.service';

describe('FactureService', () => {
  let service: FactureService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
