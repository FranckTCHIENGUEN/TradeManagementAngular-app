import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorieDialogComponent } from './add-categorie-dialog.component';

describe('AddCategorieDialogComponent', () => {
  let component: AddCategorieDialogComponent;
  let fixture: ComponentFixture<AddCategorieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategorieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
