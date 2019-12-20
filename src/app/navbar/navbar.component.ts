import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private token = this.quizService.getToken();

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
  }

  SignOut() {
    localStorage.clear();
    clearInterval(this.quizService.timer);
    this.quizService.logout(this.token);
    this.router.navigate(['/register']);
  }

}
