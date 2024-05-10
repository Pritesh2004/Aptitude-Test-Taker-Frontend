import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list'; // Import MatListModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './component/starting-page/starting-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
