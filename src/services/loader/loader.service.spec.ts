import {TestBed, waitForAsync} from '@angular/core/testing';

import {LoaderService} from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
