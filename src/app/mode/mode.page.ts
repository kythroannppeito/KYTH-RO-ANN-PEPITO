import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iQuiz } from '../admin/model';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.page.html',
  styleUrls: ['./mode.page.scss'],
})
export class ModePage implements OnInit {
  id: string[] = [];
  type: string = 'easy';
  quizList: iQuiz[] = [];
  newQuizlist: iQuiz[] = [];
  constructor(private navCtrl: NavController, private router: Router, private auth:AuthenticationService, private admin: AdminService) {}

  async ionViewWillEnter(){
    this.quizList = await this.admin.getAllQuiz();
    console.log(this.quizList);
    this.getEasyQuiz();
  }
  ngOnInit() {
  }
modeNavigate(){
  this.router.navigate(['levels']);
}
async getEasyQuiz(){
  this.id = (await this.admin.getEasyQuiz(this.type));


}
}
