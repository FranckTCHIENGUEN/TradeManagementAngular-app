import {TestBed} from '@angular/core/testing';

import {AppFournisseurService} from './app-fournisseur.service';

describe('AppFournisseurService', () => {
  let service: AppFournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
