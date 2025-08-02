import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ProduitPageComponent} from './produit-page.component';

describe('ProduitPageComponent', () => {
  let component: ProduitPageComponent;
  let fixture: ComponentFixture<ProduitPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ProduitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
