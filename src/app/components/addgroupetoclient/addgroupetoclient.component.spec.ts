import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddgroupetoclientComponent } from './addgroupetoclient.component';

describe('AddgroupetoclientComponent', () => {
  let component: AddgroupetoclientComponent;
  let fixture: ComponentFixture<AddgroupetoclientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddgroupetoclientComponent]
    });
    fixture = TestBed.createComponent(AddgroupetoclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
