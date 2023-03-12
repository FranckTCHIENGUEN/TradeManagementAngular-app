import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVentePageComponent } from './liste-vente-page.component';

describe('ListeVentePageComponent', () => {
  let component: ListeVentePageComponent;
  let fixture: ComponentFixture<ListeVentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVentePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
