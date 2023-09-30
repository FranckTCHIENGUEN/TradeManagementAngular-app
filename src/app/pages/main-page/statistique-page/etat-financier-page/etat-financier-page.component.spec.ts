import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFinancierPageComponent } from './etat-financier-page.component';

describe('EtatFinancierPageComponent', () => {
  let component: EtatFinancierPageComponent;
  let fixture: ComponentFixture<EtatFinancierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatFinancierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatFinancierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
