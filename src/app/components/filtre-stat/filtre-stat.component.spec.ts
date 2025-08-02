import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {FiltreStatComponent} from './filtre-stat.component';

describe('FiltreStatComponent', () => {
  let component: FiltreStatComponent;
  let fixture: ComponentFixture<FiltreStatComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltreStatComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FiltreStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
