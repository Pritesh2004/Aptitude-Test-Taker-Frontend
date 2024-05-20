import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.interceptor';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateQuizComponent } from './component/admin/create-quiz/create-quiz.component';
import { CategoriesComponent } from './component/admin/categories/categories.component';
import { QuizzesComponent } from './component/admin/quizzes/quizzes.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './component/admin/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    NavbarComponent,
    CreateQuizComponent,
    CategoriesComponent,
    QuizzesComponent,
    AddCategoriesComponent,
    UpdateQuizComponent,
    QuestionsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
