import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CaPageComponent} from './ca-page.component';

describe('CaPageComponent', () => {
  let component: CaPageComponent;
  let fixture: ComponentFixture<CaPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
