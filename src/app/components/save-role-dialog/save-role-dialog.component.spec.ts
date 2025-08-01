import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SaveRoleDialogComponent} from './save-role-dialog.component';

describe('SaveRoleDialogComponent', () => {
  let component: SaveRoleDialogComponent;
  let fixture: ComponentFixture<SaveRoleDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveRoleDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SaveRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
