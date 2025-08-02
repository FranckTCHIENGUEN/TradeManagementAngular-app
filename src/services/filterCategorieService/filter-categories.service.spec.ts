import { TestBed, waitForAsync } from '@angular/core/testing';

import { FilterCategoriesService } from './filter-categories.service';

describe('FilterCategoriesService', () => {
  let service: FilterCategoriesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCategoriesService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
