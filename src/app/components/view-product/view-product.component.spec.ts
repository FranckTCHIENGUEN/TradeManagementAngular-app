import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ViewProductComponent} from "./view-product.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProductComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
