import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitPageComponent } from './produit-page.component';

describe('ProduitPageComponent', () => {
  let component: ProduitPageComponent;
  let fixture: ComponentFixture<ProduitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
