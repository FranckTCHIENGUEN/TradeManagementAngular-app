import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddClientToGroupDialogComponent } from './add-client-to-group-dialog.component';

describe('AddClientToGroupDialogComponent', () => {
  let component: AddClientToGroupDialogComponent;
  let fixture: ComponentFixture<AddClientToGroupDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddClientToGroupDialogComponent]
    });
    fixture = TestBed.createComponent(AddClientToGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
