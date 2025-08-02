import {TestBed, waitForAsync} from '@angular/core/testing';
import {DataLinkTransfertService} from "./Data-link-transfert.service";


describe('DataLinkTransfertService', () => {
  let service: DataLinkTransfertService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLinkTransfertService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
