import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AddPaiementDialogComponent} from './add-paiement-dialog.component';

describe('AddPaiementDialogComponent', () => {
  let component: AddPaiementDialogComponent;
  let fixture: ComponentFixture<AddPaiementDialogComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaiementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaiementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
