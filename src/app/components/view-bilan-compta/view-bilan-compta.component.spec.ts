import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBilanComptaComponent} from './view-bilan-compta.component';

describe('ViewBilanComptaComponent', () => {
  let component: ViewBilanComptaComponent;
  let fixture: ComponentFixture<ViewBilanComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBilanComptaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBilanComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
