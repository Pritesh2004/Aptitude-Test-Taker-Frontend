import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  qId=0;

  questions:any=[];

  constructor(private questionService: QuestionService, private snack : MatSnackBar, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];

    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      data=>{
        this.questions = data;
        console.log(this.questions);

      },
      error=>{
        console.log(error);
      }
    )
  }

}
