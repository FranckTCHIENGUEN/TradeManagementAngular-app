import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficePageComponent } from './benefice-page.component';

describe('BeneficePageComponent', () => {
  let component: BeneficePageComponent;
  let fixture: ComponentFixture<BeneficePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
