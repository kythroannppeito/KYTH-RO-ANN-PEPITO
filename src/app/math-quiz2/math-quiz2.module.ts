import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathQuiz2PageRoutingModule } from './math-quiz2-routing.module';

import { MathQuiz2Page } from './math-quiz2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathQuiz2PageRoutingModule
  ],
  declarations: [MathQuiz2Page]
})
export class MathQuiz2PageModule {}
