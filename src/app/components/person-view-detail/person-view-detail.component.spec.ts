import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PersonViewDetailComponent} from './person-view-detail.component';

describe('PersonViewDetailComponent', () => {
  let component: PersonViewDetailComponent;
  let fixture: ComponentFixture<PersonViewDetailComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonViewDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
