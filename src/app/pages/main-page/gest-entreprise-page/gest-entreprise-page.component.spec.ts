import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {GestEntreprisePageComponent} from './gest-entreprise-page.component';

describe('GestEntreprisePageComponent', () => {
  let component: GestEntreprisePageComponent;
  let fixture: ComponentFixture<GestEntreprisePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestEntreprisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(GestEntreprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
