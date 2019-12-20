import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  public qns: any[];
  public seconds: number;
  public timer;
  public qnProgress: number;
  public correctAnswerCount = 0;
  private token: string;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient, private route: Router) { }

  getToken() {
    return this.token;
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    const participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string, school: string) {
    const body = {
      name,
      email,
      schoolName: school
    };
    this.http.post<{ token: string }>('https://indeedquizapp.herokuapp.com/users/signup', body).subscribe(
      (response) => {
        localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(response));
        const token = response.token;
        this.token = token;
        this.route.navigate(['/quiz']);
      }
    );
  }

  logout(token: string) {
    this.http.post('https://indeedquizapp.herokuapp.com/users/logout', token).subscribe();
    this.token = null;
  }

  getQuestions() {
    return this.http.get('https://indeedquizapp.herokuapp.com/questions');
  }

  // getAnswers() {
  //   const body = this.qns.map(x => x.QnID);
  //   return this.http.post('/api/Answers', body);
  // }

  submitScore() {
    const body = JSON.parse(localStorage.getItem('participant'));
    body.score = this.correctAnswerCount;
    return this.http.patch('https://indeedquizapp.herokuapp.com/users/score', body);
  }

}
