import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupeClientComponent } from './groupe-client.component';

describe('GroupeClientComponent', () => {
  let component: GroupeClientComponent;
  let fixture: ComponentFixture<GroupeClientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GroupeClientComponent]
    });
    fixture = TestBed.createComponent(GroupeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
