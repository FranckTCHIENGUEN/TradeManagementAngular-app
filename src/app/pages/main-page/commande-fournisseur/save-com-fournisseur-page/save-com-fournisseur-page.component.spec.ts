import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveComFournisseurPageComponent } from './save-com-fournisseur-page.component';

describe('SaveComFournisseurPageComponent', () => {
  let component: SaveComFournisseurPageComponent;
  let fixture: ComponentFixture<SaveComFournisseurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveComFournisseurPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveComFournisseurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
