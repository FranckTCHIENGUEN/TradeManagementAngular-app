import {ViewBilanComptaComponent} from "./view-bilan-compta.component";

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
  beforeEach(waitForAsync(async () => {

describe('ViewBilanComptaComponent', () => {
  let component: ViewBilanComptaComponent;
  let fixture: ComponentFixture<ViewBilanComptaComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBilanComptaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewBilanComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})}));
