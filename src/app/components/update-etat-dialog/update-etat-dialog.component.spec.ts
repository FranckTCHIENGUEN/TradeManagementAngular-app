import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UpdateEtatDialogComponent} from "./update-etat-dialog.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('UpdateEtatDialogComponent', () => {
  let component: UpdateEtatDialogComponent;
  let fixture: ComponentFixture<UpdateEtatDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEtatDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateEtatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
