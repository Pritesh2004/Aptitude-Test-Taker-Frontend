import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    };

    formOtp = {
      fOtp:'',
    };
    otp: string = '';
    message: string = '';
    otpSent:boolean = false;

  constructor(private userService: UserService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.otp = this.generateOTP();
    console.log(this.otp, " otp when loaded")

  }

  generateOTP(): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  
  sendOTP(email:string) {
    this.userService.sendOTP(email, this.otp)
      .subscribe(
        response => {

          this.message = response;
          console.log(this.message)
          console.log(this.otp," otp when sent")
          this.snack.open("Check your mail for otp",'ok',{
            verticalPosition:'top'
          });
          this.otpSent=true;
        },
        error => {
          console.log(email," ",this.otp)
          console.error('Error verifying OTP:', error);
          this.snack.open("Error registering user",'ok',{
            verticalPosition:'top'
          });

          this.message = 'Failed to verify OTP. Please try again later.';
        }
      );
  }

  verifyOtp(formOtp:string){
    console.log(formOtp," otp in form")
    console.log(this.otp, " otp from email")
    if(formOtp === this.otp){
      console.log(this.user)
      this.registerUser();
    }
    else{
      this.snack.open("Wrong otp entered",'ok',{
        verticalPosition:'top'
      });
    }
  }

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        this.snack.open('Registration successfull','ok',{
          verticalPosition:'top'
        });
        this.router.navigate(['login'])

        // Add any additional handling or redirection logic here
      },
      error => {
        console.error('Error registering user:', error);
        this.snack.open("Error registering user",'ok',{
          verticalPosition:'top'
        });

        // Handle error, display message, etc.
      }
    );
  }
}
