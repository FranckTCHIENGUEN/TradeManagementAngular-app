import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerGroupeClientDialogComponent } from './creer-groupe-client-dialog.component';

describe('CreerGroupeClientDialogComponent', () => {
  let component: CreerGroupeClientDialogComponent;
  let fixture: ComponentFixture<CreerGroupeClientDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerGroupeClientDialogComponent]
    });
    fixture = TestBed.createComponent(CreerGroupeClientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
