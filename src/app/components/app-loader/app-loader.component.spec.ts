import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AppLoaderComponent} from './app-loader.component';

describe('AppLoaderComponent', () => {
  let component: AppLoaderComponent;
  let fixture: ComponentFixture<AppLoaderComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
