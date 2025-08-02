import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppGroupeClientService } from './app-groupe-client.service';

describe('AppGroupeClientService', () => {
  let service: AppGroupeClientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppGroupeClientService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
