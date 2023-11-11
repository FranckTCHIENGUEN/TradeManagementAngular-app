import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AchatPageComponent} from './achat-page.component';

describe('AchatPageComponent', () => {
  let component: AchatPageComponent;
  let fixture: ComponentFixture<AchatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
