import {TestBed} from '@angular/core/testing';

import {AppEntrepriseService} from './app-entreprise.service';

describe('AppEntrepriseService', () => {
  let service: AppEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
