import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {SecondaryMenuComponent} from './secondary-menu.component';

describe('SecondaryMenuComponent', () => {
  let component: SecondaryMenuComponent;
  let fixture: ComponentFixture<SecondaryMenuComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecondaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
