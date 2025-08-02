import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FournisseurPageComponent} from './fournisseur-page.component';

describe('FournisseurPageComponent', () => {
  let component: FournisseurPageComponent;
  let fixture: ComponentFixture<FournisseurPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(FournisseurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
