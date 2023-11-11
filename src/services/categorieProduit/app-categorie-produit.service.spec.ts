import {TestBed} from '@angular/core/testing';

import {AppCategorieProduitService} from './app-categorie-produit.service';

describe('AppCategorieProduitService', () => {
  let service: AppCategorieProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCategorieProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
