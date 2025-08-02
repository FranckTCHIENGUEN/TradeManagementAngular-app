import { TestBed, waitForAsync } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
