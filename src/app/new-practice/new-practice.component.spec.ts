import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPracticeComponent } from './new-practice.component';

describe('NewPracticeComponent', () => {
  let component: NewPracticeComponent;
  let fixture: ComponentFixture<NewPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
