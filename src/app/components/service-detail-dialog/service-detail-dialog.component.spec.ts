import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ServiceDetailDialogComponent} from "./service-detail-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('ServiceDetailDialogComponent', () => {
  let component: ServiceDetailDialogComponent;
  let fixture: ComponentFixture<ServiceDetailDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDetailDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
