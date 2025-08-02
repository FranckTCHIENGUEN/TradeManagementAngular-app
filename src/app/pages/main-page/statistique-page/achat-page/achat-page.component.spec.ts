import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AchatPageComponent} from './achat-page.component';

describe('AchatPageComponent', () => {
  let component: AchatPageComponent;
  let fixture: ComponentFixture<AchatPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AchatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
