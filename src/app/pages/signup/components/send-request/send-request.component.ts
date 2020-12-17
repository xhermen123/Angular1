import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../../core/models/user';

import { SignupService } from '../../services/signup.service';
import { ScoresStoreService } from '../../../../common/services/scores-store.service';
import { CommonService } from '../../../../common/services/common.service';


interface ResponseValue {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  degree: string;
  employment: string;
  age: number;
  zipcode: string;
  income: number;
  scores: number[][];
}

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss']
})
export class SendRequestComponent implements OnInit {

  isLoading = false;
  response;
  registerResponse: any = null;
  user: User;

  constructor(
    private signupService: SignupService,
    private commonService: CommonService,
    private scoresStoreService: ScoresStoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.signupService.user;
  }

  async send() {
    try {
      this.isLoading = true;
      this.response = await this.signupService.submit().toPromise();
      const oldScoreFormat: number[][] = [
        {
          id: 1,
          user: 1,
          overall: this.response.score_overall,
          cat1: this.response.score_medical,
          cat2: this.response.score_income,
          cat3: this.response.score_stuff,
          cat4: this.response.score_liability,
          cat5: this.response.score_digital,
        },
        {
          id: 2,
          user: 2,
          overall: this.response.score_overall,
          cat1: this.response.score_digital,
          cat2: this.response.score_liability,
          cat3: this.response.score_stuff,
          cat4: this.response.score_income,
          cat5: this.response.score_medical,
        },
        {
          id: 3,
          user: 3,
          overall: this.response.score_overall,
          cat1: this.response.score_stuff,
          cat2: this.response.score_medical,
          cat3: this.response.score_digital,
          cat4: this.response.score_income,
          cat5: this.response.score_liability,
        },
      ]; // FIXME
      this.scoresStoreService.addScores(oldScoreFormat);
      this.registerResponse = '+1-202-555-1234'; // FIXME

      // this.scoresStoreService.addScores(this.response.scores);
      // this.registerResponse = this.response['phone_number'];

      this.commonService.toastr('Your request successfully sent.');
    } catch (e) {
      this.commonService.toastr('Sorry, Failed to save user information. Please try again later.');
    } finally {
      this.isLoading = false;
    }
  }

}
