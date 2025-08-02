import {TestBed, waitForAsync} from '@angular/core/testing';

import {ClientAppServiceService} from './client-app-service.service';

describe('ClientAppServiceService', () => {
  let service: ClientAppServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAppServiceService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
