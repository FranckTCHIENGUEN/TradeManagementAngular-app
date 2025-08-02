import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ViewDetailBilanDialogComponent} from "./view-detail-bilan-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('ViewDetailBilanDialogComponent', () => {
  let component: ViewDetailBilanDialogComponent;
  let fixture: ComponentFixture<ViewDetailBilanDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetailBilanDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewDetailBilanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
