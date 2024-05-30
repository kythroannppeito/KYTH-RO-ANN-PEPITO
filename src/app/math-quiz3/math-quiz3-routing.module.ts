import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathQuiz3Page } from './math-quiz3.page';

const routes: Routes = [
  {
    path: '',
    component: MathQuiz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathQuiz3PageRoutingModule {}
