import { TestBed } from '@angular/core/testing';

import { AppPersonSearchService } from './app-person-search.service';

describe('AppPersonSearchService', () => {
  let service: AppPersonSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPersonSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
