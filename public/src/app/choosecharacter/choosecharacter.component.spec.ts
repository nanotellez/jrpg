import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecharacterComponent } from './choosecharacter.component';

describe('ChoosecharacterComponent', () => {
  let component: ChoosecharacterComponent;
  let fixture: ComponentFixture<ChoosecharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosecharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
