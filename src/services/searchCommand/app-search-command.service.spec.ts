import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppSearchCommandService} from './app-search-command.service';

describe('AppSearchCommandService', () => {
  let service: AppSearchCommandService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSearchCommandService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
