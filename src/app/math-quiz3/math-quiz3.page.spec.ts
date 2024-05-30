import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathQuiz3Page } from './math-quiz3.page';

describe('MathQuiz3Page', () => {
  let component: MathQuiz3Page;
  let fixture: ComponentFixture<MathQuiz3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
