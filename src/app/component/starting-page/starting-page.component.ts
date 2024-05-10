import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css']
})
export class StartingPageComponent {
  constructor(private router:Router){}

  openHome(){
    this.router.navigate(['register'])
  }

}
