import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewDetailBilanDialogComponent} from './view-detail-bilan-dialog.component';

describe('ViewDetailBilanDialogComponent', () => {
  let component: ViewDetailBilanDialogComponent;
  let fixture: ComponentFixture<ViewDetailBilanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailBilanDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailBilanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
