import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EtatFinancierPageComponent} from './etat-financier-page.component';

describe('EtatFinancierPageComponent', () => {
  let component: EtatFinancierPageComponent;
  let fixture: ComponentFixture<EtatFinancierPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatFinancierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EtatFinancierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
