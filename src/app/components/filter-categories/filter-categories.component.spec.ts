import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCategoriesComponent } from './filter-categories.component';

describe('FilterCategoriesComponent', () => {
  let component: FilterCategoriesComponent;
  let fixture: ComponentFixture<FilterCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCategoriesComponent]
    });
    fixture = TestBed.createComponent(FilterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
