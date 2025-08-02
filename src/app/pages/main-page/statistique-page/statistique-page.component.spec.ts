import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StatistiquePageComponent} from './statistique-page.component';

describe('StatistiquePageComponent', () => {
  let component: StatistiquePageComponent;
  let fixture: ComponentFixture<StatistiquePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(StatistiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
