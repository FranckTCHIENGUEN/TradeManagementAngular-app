import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppEntrepriseService} from './app-entreprise.service';

describe('AppEntrepriseService', () => {
  let service: AppEntrepriseService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEntrepriseService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
