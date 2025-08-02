import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AddCategorieDialogComponent} from "./add-categorie-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('AddCategorieDialogComponent', () => {
  let component: AddCategorieDialogComponent;
  let fixture: ComponentFixture<AddCategorieDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategorieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
