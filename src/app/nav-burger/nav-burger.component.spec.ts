import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBurgerComponent } from './nav-burger.component';

describe('NavBurgerComponent', () => {
  let component: NavBurgerComponent;
  let fixture: ComponentFixture<NavBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
