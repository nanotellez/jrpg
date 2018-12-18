import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatmonstersectionComponent } from './combatmonstersection.component';

describe('CombatmonstersectionComponent', () => {
  let component: CombatmonstersectionComponent;
  let fixture: ComponentFixture<CombatmonstersectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatmonstersectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatmonstersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
