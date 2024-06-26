import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechQuizPage } from './tech-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: TechQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechQuizPageRoutingModule {}
