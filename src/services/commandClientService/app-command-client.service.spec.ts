import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppCommandClientService} from './app-command-client.service';

describe('AppCommandClientService', () => {
  let service: AppCommandClientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCommandClientService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
