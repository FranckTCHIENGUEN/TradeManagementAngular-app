import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AddRoleToUserComponent} from './add-role-to-user.component';

describe('AddRoleToUserComponent', () => {
  let component: AddRoleToUserComponent;
  let fixture: ComponentFixture<AddRoleToUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleToUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AddRoleToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
