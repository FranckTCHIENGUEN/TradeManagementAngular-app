import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppCommandFournisseurService} from './app-command-fournisseur.service';

describe('AppCommandFournisseurService', () => {
  let service: AppCommandFournisseurService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCommandFournisseurService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
