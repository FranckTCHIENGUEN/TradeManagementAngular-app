import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ViewenterpriseDialogComponent} from "./viewenterprise-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('ViewenterpriseDialogComponent', () => {
  let component: ViewenterpriseDialogComponent;
  let fixture: ComponentFixture<ViewenterpriseDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewenterpriseDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewenterpriseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
