import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryMenuComponent} from './primary-menu.component';

describe('PrimaryMenuComponent', () => {
  let component: PrimaryMenuComponent;
  let fixture: ComponentFixture<PrimaryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
