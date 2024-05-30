import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathQuiz3PageRoutingModule } from './math-quiz3-routing.module';

import { MathQuiz3Page } from './math-quiz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathQuiz3PageRoutingModule
  ],
  declarations: [MathQuiz3Page]
})
export class MathQuiz3PageModule {}
