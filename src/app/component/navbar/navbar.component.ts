import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router, public loginService: LoginService){}

  openHome(){
    this.router.navigate(['login'])
  }

  logout(){
    this.loginService.logout();
    location.reload();
  }
}
