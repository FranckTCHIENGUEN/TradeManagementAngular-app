import {TestBed} from '@angular/core/testing';
import {DataLinkTransfertService} from "./Data-link-transfert.service";


describe('DataLinkTransfertService', () => {
  let service: DataLinkTransfertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLinkTransfertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
