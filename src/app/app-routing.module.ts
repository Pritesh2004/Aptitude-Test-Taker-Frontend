import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminGuard } from './services/authGuards/admin.guard';
import { NormalUserGuard } from './services/authGuards/normal-user.guard';

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
  pathMatch:"full",
  canActivate:[AdminGuard]
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
