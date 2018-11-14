import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionProccessComponent } from './question-proccess.component';

describe('QuestionProccessComponent', () => {
  let component: QuestionProccessComponent;
  let fixture: ComponentFixture<QuestionProccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionProccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
