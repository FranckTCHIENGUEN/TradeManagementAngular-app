import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateEtatDialogComponent} from './update-etat-dialog.component';

describe('UpdateEtatDialogComponent', () => {
  let component: UpdateEtatDialogComponent;
  let fixture: ComponentFixture<UpdateEtatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
