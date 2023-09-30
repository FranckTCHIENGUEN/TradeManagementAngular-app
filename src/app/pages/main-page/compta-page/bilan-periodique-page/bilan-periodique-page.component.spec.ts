import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanPeriodiquePageComponent } from './bilan-periodique-page.component';

describe('BilanPeriodiquePageComponent', () => {
  let component: BilanPeriodiquePageComponent;
  let fixture: ComponentFixture<BilanPeriodiquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanPeriodiquePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanPeriodiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
