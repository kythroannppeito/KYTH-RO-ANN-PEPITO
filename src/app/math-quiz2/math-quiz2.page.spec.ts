import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathQuiz2Page } from './math-quiz2.page';

describe('MathQuiz2Page', () => {
  let component: MathQuiz2Page;
  let fixture: ComponentFixture<MathQuiz2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuiz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
