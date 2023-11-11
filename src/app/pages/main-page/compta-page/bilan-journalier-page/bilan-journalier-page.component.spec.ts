import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BilanJournalierPageComponent} from './bilan-journalier-page.component';

describe('BilanJournalierPageComponent', () => {
  let component: BilanJournalierPageComponent;
  let fixture: ComponentFixture<BilanJournalierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanJournalierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanJournalierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
