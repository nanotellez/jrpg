import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatplayerhealthsectionComponent } from './combatplayerhealthsection.component';

describe('CombatplayerhealthsectionComponent', () => {
  let component: CombatplayerhealthsectionComponent;
  let fixture: ComponentFixture<CombatplayerhealthsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatplayerhealthsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatplayerhealthsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
