import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ViewCatDialogComponent} from "./view-cat-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('ViewCatDialogComponent', () => {
  let component: ViewCatDialogComponent;
  let fixture: ComponentFixture<ViewCatDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCatDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewCatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
