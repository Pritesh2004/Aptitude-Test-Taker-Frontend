import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userRequest = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router:Router){}

  loginUser(){
    this.loginService.generateToken(this.userRequest).subscribe(

      (response :any)=>{
        console.log("Token generated successfully");
        console.log("Token", response);

        this.loginService.userLogin(response.token);

        this.loginService.getLoggedInUser().subscribe(
          userData=>{
            console.log("User ->",userData);
            this.loginService.setUser(userData);
            this.router.navigate(['userHome']);
          }
        );
      },
      error =>{
        console.log("Error while generating token", error);
      }

    );
   
  }
}
