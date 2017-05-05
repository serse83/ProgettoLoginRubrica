import {AuthService} from "./AuthService"
import {Component} from "@angular/core"
import {Router} from '@angular/router';

@Component({
    selector:'login',
   
   templateUrl: './login.html',
    styleUrls: ['app.component.css']
})

export class LoginComponent {
// message: string;

//constructor(public UtenzaAuth: AuthService) {
  //this.message = '';
 //}

 //login(email: string, password: string): boolean {
//this.message = '';
//if (!this.login(email, password)) {
// this.message = 'Incorrect credentials.';
// };

//return false;
//}

//logout(): boolean {
 //this.UtenzaAuth.logout();
//return false;
 //}
//}

   message: string;

  constructor(public authService: AuthService) {
    this.message = '';
  }

  login(user: string, password: string): boolean {
      if (user === 'sergio' && password === 'marzullo') {
      localStorage.setItem('username', 'user');
      return true;
    }
    this.message = '';
    if (user.length===0) {
     this.message = 'Inser Username';}
    if (password.length===0) {
     this.message = 'Inser password';}
    if ((password.length===0) &&(user.length===0)) {
     this.message = 'Inser username and password';}
   //  if (!this.authService.login(user,password)) {
    // this.message = 'Incorrect credentials.';}
    
    return false;
  }

  /*
 login(user, pass): boolean {
    this.message = '';
    if (user.length===0) {
     this.message = 'Inser Username';}
    if (user.length===0) {
     this.message = 'Inser password';}
    if ((user.length===0) &&(pass.length===0)) {
     this.message = 'Inser username and password';}
    if (!this.authService.login(user,pass)) {
    this.message = 'Incorrect credentials.';}
    
    return false;
  }
  */

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
