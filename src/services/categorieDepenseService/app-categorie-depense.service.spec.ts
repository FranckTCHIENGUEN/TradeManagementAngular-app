import {TestBed, waitForAsync} from '@angular/core/testing';

import {AppCategorieDepenseService} from './app-categorie-depense.service';

describe('AppCategorieDepenseService', () => {
  let service: AppCategorieDepenseService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCategorieDepenseService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
