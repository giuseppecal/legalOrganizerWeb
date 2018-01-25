import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPracticesComponent } from './last-practices.component';

describe('LastPracticesComponent', () => {
  let component: LastPracticesComponent;
  let fixture: ComponentFixture<LastPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
