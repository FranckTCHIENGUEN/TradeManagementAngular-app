import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {UtilisateurComponent} from "./utilisateur.component";
  beforeEach(waitForAsync(async () => {
  }));

describe('UtilisateurComponent', () => {
  let component: UtilisateurComponent;
  let fixture: ComponentFixture<UtilisateurComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilisateurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
