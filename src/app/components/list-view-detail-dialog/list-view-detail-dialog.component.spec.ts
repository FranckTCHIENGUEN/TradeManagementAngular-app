import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ListViewDetailDialogComponent} from './list-view-detail-dialog.component';

describe('ListViewDetailDialogComponent', () => {
  let component: ListViewDetailDialogComponent;
  let fixture: ComponentFixture<ListViewDetailDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListViewDetailDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListViewDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
