import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComptaListViewComponent } from './compta-list-view.component';

describe('ComptaListViewComponent', () => {
  let component: ComptaListViewComponent;
  let fixture: ComponentFixture<ComptaListViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComptaListViewComponent]
    });
    fixture = TestBed.createComponent(ComptaListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
