import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DashbordPageComponent} from './dashbord-page.component';

describe('DashbordPageComponent', () => {
  let component: DashbordPageComponent;
  let fixture: ComponentFixture<DashbordPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DashbordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
