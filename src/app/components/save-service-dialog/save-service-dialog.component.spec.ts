import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SaveServiceDialogComponent} from './save-service-dialog.component';

describe('SaveServiceDialogComponent', () => {
  let component: SaveServiceDialogComponent;
  let fixture: ComponentFixture<SaveServiceDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveServiceDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SaveServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
