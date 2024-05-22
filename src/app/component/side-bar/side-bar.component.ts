import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  isLoggedIn = false;
  user = null;
  isRoleAdmin = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggenIn();
    this.user = this.loginService.getUser();

    if (this.loginService.getUserRole() === "ADMIN") {
      this.isRoleAdmin = true;
    }

    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.loginService.isLoggenIn();
      this.user = this.loginService.getUser();
      if (this.loginService.getUserRole() === "ADMIN") {
        this.isRoleAdmin = true;
      } else {
        this.isRoleAdmin = false;
      }
    });
  }

  openHome() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
    window.location.reload();
  }
}
