import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaveCommandeClientComponent} from './save-commande-client.component';

describe('SaveCommandeClientComponent', () => {
  let component: SaveCommandeClientComponent;
  let fixture: ComponentFixture<SaveCommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCommandeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
