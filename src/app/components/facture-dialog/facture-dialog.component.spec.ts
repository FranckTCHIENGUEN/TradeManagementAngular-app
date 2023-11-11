import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FactureDialogComponent} from './facture-dialog.component';

describe('FactureDialogComponent', () => {
  let component: FactureDialogComponent;
  let fixture: ComponentFixture<FactureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
