import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensePageComponent } from './depense-page.component';

describe('DepensePageComponent', () => {
  let component: DepensePageComponent;
  let fixture: ComponentFixture<DepensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
