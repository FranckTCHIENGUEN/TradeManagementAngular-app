import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptaPageComponent } from './compta-page.component';

describe('ComptaPageComponent', () => {
  let component: ComptaPageComponent;
  let fixture: ComponentFixture<ComptaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
