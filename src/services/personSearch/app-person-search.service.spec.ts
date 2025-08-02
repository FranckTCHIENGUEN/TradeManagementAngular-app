import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppPersonSearchService} from './app-person-search.service';

describe('AppPersonSearchService', () => {
  let service: AppPersonSearchService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPersonSearchService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
