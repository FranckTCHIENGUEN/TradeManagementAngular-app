import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SaveDepenseDialogComponent} from './save-depense-dialog.component';

describe('SaveDepenseDialogComponent', () => {
  let component: SaveDepenseDialogComponent;
  let fixture: ComponentFixture<SaveDepenseDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveDepenseDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SaveDepenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
