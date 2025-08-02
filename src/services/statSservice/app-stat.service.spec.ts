import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppStatService} from './app-stat.service';

describe('AppStatService', () => {
  let service: AppStatService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStatService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
