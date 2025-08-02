import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BeneficePageComponent} from './benefice-page.component';

describe('BeneficePageComponent', () => {
  let component: BeneficePageComponent;
  let fixture: ComponentFixture<BeneficePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(BeneficePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
