import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AddLigneCommandeComponent} from './add-ligne-commande.component';

describe('AddLigneCommandeComponent', () => {
  let component: AddLigneCommandeComponent;
  let fixture: ComponentFixture<AddLigneCommandeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLigneCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AddLigneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
