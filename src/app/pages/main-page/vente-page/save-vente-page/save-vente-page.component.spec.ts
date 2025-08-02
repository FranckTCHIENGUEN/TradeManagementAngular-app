import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SaveVentePageComponent} from './save-vente-page.component';

describe('SaveVentePageComponent', () => {
  let component: SaveVentePageComponent;
  let fixture: ComponentFixture<SaveVentePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveVentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SaveVentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
