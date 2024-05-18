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

const routes: Routes = [

{
  path:'',
  component:StartingPageComponent,
  pathMatch:"full"
},

{
  path:'userHome',
  component:UserHomeComponent,
  pathMatch:"full",
  canActivate:[NormalUserGuard]

},

{
  path:'adminHome',
  component:AdminHomeComponent,
  canActivate:[AdminGuard],
  children:[
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
    
  ]
},

{
  path:'login',
  component:LoginComponent,
  pathMatch:"full"
},

{
  path:'register',
  component:RegisterComponent,
  pathMatch:"full"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
