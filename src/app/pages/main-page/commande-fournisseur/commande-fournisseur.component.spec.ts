import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CommandeFournisseurComponent} from './commande-fournisseur.component';

describe('CommandeFournisseurComponent', () => {
  let component: CommandeFournisseurComponent;
  let fixture: ComponentFixture<CommandeFournisseurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
