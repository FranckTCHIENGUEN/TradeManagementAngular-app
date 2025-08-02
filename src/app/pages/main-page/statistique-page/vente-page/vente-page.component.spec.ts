import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {VentePageComponent} from './vente-page.component';

describe('VentePageComponent', () => {
  let component: VentePageComponent;
  let fixture: ComponentFixture<VentePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(VentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
