import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{

  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    // Add more questions as needed
  ];

  quizStarted = false;
  quizEnded = false;

  constructor(private locationSt : LocationStrategy){}

  ngOnInit(): void {

      this.preventBackButton();
      this.quizStarted = true;

      this.selectedOptions = new Array(this.questions.length).fill(null);
      this.startTimer();
  }

  preventBackButton(){
    history.pushState(null,'',location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,'',location.href);
    })
  }

  currentQuestionIndex = 0;
  selectedOptions: string[] = [];
  score = 0;
  timer: any;
  timeLeft = 20 * 60; // 20 minutes in seconds


  startTimer(): void {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
        // Handle timeout here, for example, show the score
      }
    }, 1000); // Update every second
  }

  selectOption(option: string): void {
    this.selectedOptions[this.currentQuestionIndex] = option;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      Swal.fire({
        icon: 'info',
        title: "Are you sure?",
        confirmButtonText: 'Yes',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.endQuiz();
          
        }
      })
    } else {
      if (this.selectedOptions[this.currentQuestionIndex] === this.questions[this.currentQuestionIndex].answer) {
        this.score++;
      }
      // Reset selected option for current question
      this.currentQuestionIndex++;
    }
  }

  prevQuestion(): void {
    this.currentQuestionIndex--;
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.quizEnded) {
      return confirm('Are you sure you want to leave the quiz? Your progress will be lost.');
    }
    return true;
  }

  endQuiz(): void {
    this.quizEnded = true;
    // Any cleanup, calculations, or navigation logic goes here
  }
}