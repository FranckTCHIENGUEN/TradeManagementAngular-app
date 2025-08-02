import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BilanJournalierPageComponent} from './bilan-journalier-page.component';

describe('BilanJournalierPageComponent', () => {
  let component: BilanJournalierPageComponent;
  let fixture: ComponentFixture<BilanJournalierPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanJournalierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(BilanJournalierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
