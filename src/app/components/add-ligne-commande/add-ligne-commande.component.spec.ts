import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLigneCommandeComponent } from './add-ligne-commande.component';

describe('AddLigneCommandeComponent', () => {
  let component: AddLigneCommandeComponent;
  let fixture: ComponentFixture<AddLigneCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLigneCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLigneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
