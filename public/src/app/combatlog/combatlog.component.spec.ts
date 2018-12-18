import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatlogComponent } from './combatlog.component';

describe('CombatlogComponent', () => {
  let component: CombatlogComponent;
  let fixture: ComponentFixture<CombatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
