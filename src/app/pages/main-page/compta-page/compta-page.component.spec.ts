import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ComptaPageComponent} from './compta-page.component';

describe('ComptaPageComponent', () => {
  let component: ComptaPageComponent;
  let fixture: ComponentFixture<ComptaPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ComptaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
