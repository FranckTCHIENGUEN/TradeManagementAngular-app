import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveClientToGroupeComponent } from './remove-client-to-groupe.component';

describe('RemoveClientToGroupeComponent', () => {
  let component: RemoveClientToGroupeComponent;
  let fixture: ComponentFixture<RemoveClientToGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveClientToGroupeComponent]
    });
    fixture = TestBed.createComponent(RemoveClientToGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
