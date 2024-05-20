import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8888'; //Spring boot url

  getQuestionsOfQuiz(qid: any) {
    return this.http.get(`${this.baseUrl}/question/quiz/${qid}`);
  }
}
