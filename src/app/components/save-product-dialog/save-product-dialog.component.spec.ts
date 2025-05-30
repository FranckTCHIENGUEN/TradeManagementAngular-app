import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveProductDialogComponent} from './save-product-dialog.component';

describe('SaveProductDialogComponent', () => {
  let component: SaveProductDialogComponent;
  let fixture: ComponentFixture<SaveProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
