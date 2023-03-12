import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVentePageComponent } from './save-vente-page.component';

describe('SaveVentePageComponent', () => {
  let component: SaveVentePageComponent;
  let fixture: ComponentFixture<SaveVentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveVentePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveVentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
