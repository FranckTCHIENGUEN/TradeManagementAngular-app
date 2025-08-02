import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DepensePageComponent} from './depense-page.component';

describe('DepensePageComponent', () => {
  let component: DepensePageComponent;
  let fixture: ComponentFixture<DepensePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepensePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DepensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
