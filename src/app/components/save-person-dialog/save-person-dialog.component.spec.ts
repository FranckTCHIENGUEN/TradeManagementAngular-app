import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SavePersonDialogComponent} from './save-person-dialog.component';

describe('SavePersonDialogComponent', () => {
  let component: SavePersonDialogComponent;
  let fixture: ComponentFixture<SavePersonDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavePersonDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SavePersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
