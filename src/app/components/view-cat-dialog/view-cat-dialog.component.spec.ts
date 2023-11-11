import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewCatDialogComponent} from './view-cat-dialog.component';

describe('ViewCatDialogComponent', () => {
  let component: ViewCatDialogComponent;
  let fixture: ComponentFixture<ViewCatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
