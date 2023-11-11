import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComFournisseurPageComponent} from './list-com-fournisseur-page.component';

describe('ListComFournisseurPageComponent', () => {
  let component: ListComFournisseurPageComponent;
  let fixture: ComponentFixture<ListComFournisseurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComFournisseurPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComFournisseurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
