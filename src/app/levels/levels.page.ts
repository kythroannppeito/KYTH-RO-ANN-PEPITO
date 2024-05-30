import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AdminService } from '../admin/admin.service';
import { iQuiz } from '../admin/model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage {
  id: string[]=[];
  levels: string[]=[];
  newQuizList: iQuiz[] = [];
  quizList: iQuiz[] = [];
  level: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]
  constructor(private navCtrl: NavController, private router: Router, private auth:AuthenticationService, private admin: AdminService) {}

  async ionViewWillEnter(){
    this.quizList = await this.admin.getAllQuiz();
    console.log(this.quizList);
    this.id = await this.admin.getEasyQuiz('easy');
    console.log(this.id);
    this.newQuizList = await this.admin.getMultipleId(this.id);
    console.log(this.newQuizList);

  }
  async selectLevel(level:string){
   const result = this.newQuizList.filter(data => data.level.includes(level));
   console.log(result);
    this.auth.quizList = result;
    this.router.navigate(['quiz']);

  }

}
