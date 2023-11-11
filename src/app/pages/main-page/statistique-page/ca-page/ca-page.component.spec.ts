import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CaPageComponent} from './ca-page.component';

describe('CaPageComponent', () => {
  let component: CaPageComponent;
  let fixture: ComponentFixture<CaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
