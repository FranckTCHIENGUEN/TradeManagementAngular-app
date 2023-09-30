import { TestBed } from '@angular/core/testing';

import { AppCategorieDepenseService } from './app-categorie-depense.service';

describe('AppCategorieDepenseService', () => {
  let service: AppCategorieDepenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCategorieDepenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
