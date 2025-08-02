import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BilanPeriodiquePageComponent} from './bilan-periodique-page.component';

describe('BilanPeriodiquePageComponent', () => {
  let component: BilanPeriodiquePageComponent;
  let fixture: ComponentFixture<BilanPeriodiquePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanPeriodiquePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(BilanPeriodiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
