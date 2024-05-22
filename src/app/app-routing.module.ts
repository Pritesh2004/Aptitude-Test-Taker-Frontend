import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminGuard } from './services/authGuards/admin.guard';
import { NormalUserGuard } from './services/authGuards/normal-user.guard';
import { CreateQuizComponent } from './component/admin/create-quiz/create-quiz.component';
import { AddCategoriesComponent } from './component/admin/add-categories/add-categories.component';
import { CategoriesComponent } from './component/admin/categories/categories.component';
import { QuizzesComponent } from './component/admin/quizzes/quizzes.component';
import { UpdateQuizComponent } from './component/admin/update-quiz/update-quiz.component';
import { QuestionsComponent } from './component/admin/questions/questions.component';
import { AddQuestionsComponent } from './component/admin/add-questions/add-questions.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './component/admin/admin-profile/admin-profile.component';

const routes: Routes = [

{
  path:'',
  component:StartingPageComponent,
  children:[
    {
      path:'login',
      component:LoginComponent,
    },
    
    {
      path:'register',
      component:RegisterComponent,
    }
  ]
},

{
  path:'userHome',
  component:UserHomeComponent,
  canActivate:[NormalUserGuard],
  children:[
    {
      path:'user-profile',
      component:UserProfileComponent
    }
  ]

},

{
  path:'adminHome',
  component:AdminHomeComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'admin-profile',
      component:AdminProfileComponent
    },
    {
      path:'createQuiz',
      component: CreateQuizComponent,
    },
    {
      path:'addCategories',
      component: AddCategoriesComponent,
    },
    {
      path:'categories',
      component: CategoriesComponent,
    },
    {
      path:'quizzes',
      component: QuizzesComponent,
    },
    {
      path:'quiz/:qId',
      component:UpdateQuizComponent
    },
    {
      path:'questions/:qId/:title',
      component:QuestionsComponent
    },
    {
      path:'add-question/:qId/:title',
      component:AddQuestionsComponent
    }
    
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
