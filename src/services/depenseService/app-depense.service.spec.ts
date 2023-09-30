import { TestBed } from '@angular/core/testing';

import { AppDepenseService } from './app-depense.service';

describe('AppDepenseService', () => {
  let service: AppDepenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDepenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
