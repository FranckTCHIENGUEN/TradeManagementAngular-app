import {TestBed} from '@angular/core/testing';

import {ClientAppServiceService} from './client-app-service.service';

describe('ClientAppServiceService', () => {
  let service: ClientAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
