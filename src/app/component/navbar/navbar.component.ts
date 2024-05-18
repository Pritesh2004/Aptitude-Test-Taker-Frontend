import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  isRoleAdmin = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn = this.loginService.isLoggenIn();
    this.user = this.loginService.getUser();

    if (this.loginService.getUserRole() == "ADMIN") {
      this.isRoleAdmin = true;
    }
    

    //subject
    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.loginService.isLoggenIn();
      this.user = this.loginService.getUser();
      if (this.loginService.getUserRole() == "ADMIN") {
        this.isRoleAdmin = true;
      }
      
      console.log("IsRoleAdmin: " + this.isRoleAdmin);

    });
  }

  openHome() {
    this.router.navigate(['login'])
  }

  logout() {
    this.loginService.logout();
    // this.isLoggedIn = false;
    // this.isRoleAdmin = false;
    // this.isRoleNormal = false;
    this.loginService.loginStatusSubject.next(false);
    window.location.reload();
  }
}
