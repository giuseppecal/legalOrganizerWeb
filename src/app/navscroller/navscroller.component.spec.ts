import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavscrollerComponent } from './navscroller.component';

describe('NavscrollerComponent', () => {
  let component: NavscrollerComponent;
  let fixture: ComponentFixture<NavscrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavscrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavscrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
