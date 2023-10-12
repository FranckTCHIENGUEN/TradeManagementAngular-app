import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEntreprisePageComponent } from './gest-entreprise-page.component';

describe('GestEntreprisePageComponent', () => {
  let component: GestEntreprisePageComponent;
  let fixture: ComponentFixture<GestEntreprisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestEntreprisePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestEntreprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
