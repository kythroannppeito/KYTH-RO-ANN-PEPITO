import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathQuiz2Page } from './math-quiz2.page';

const routes: Routes = [
  {
    path: '',
    component: MathQuiz2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathQuiz2PageRoutingModule {}
