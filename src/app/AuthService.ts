import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { CanDeactivate } from '@angular/router';

@Injectable()
export class AuthService {


//logout remove username
  logout(): any {
    localStorage.removeItem('username');   
  }

// check user 
  getUser(): any {
    return localStorage.getItem('username');
  }
//protected user
  Logged(): boolean {
    return this.getUser() !== null;
  }
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
