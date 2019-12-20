import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.quizService.insertParticipant(form.value.name, form.value.email, form.value.school);
  }

}
