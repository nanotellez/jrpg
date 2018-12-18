import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatplayersectionComponent } from './combatplayersection.component';

describe('CombatplayersectionComponent', () => {
  let component: CombatplayersectionComponent;
  let fixture: ComponentFixture<CombatplayersectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatplayersectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatplayersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
