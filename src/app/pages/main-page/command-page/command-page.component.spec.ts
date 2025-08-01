import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {CommandPageComponent} from './command-page.component';

describe('CommandPageComponent', () => {
  let component: CommandPageComponent;
  let fixture: ComponentFixture<CommandPageComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
