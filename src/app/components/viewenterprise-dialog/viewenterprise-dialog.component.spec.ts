import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenterpriseDialogComponent } from './viewenterprise-dialog.component';

describe('ViewenterpriseDialogComponent', () => {
  let component: ViewenterpriseDialogComponent;
  let fixture: ComponentFixture<ViewenterpriseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewenterpriseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewenterpriseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
