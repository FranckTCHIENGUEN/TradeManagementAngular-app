import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatistiquePageComponent} from './statistique-page.component';

describe('StatistiquePageComponent', () => {
  let component: StatistiquePageComponent;
  let fixture: ComponentFixture<StatistiquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
