//Injectable lets Angular know that a class can be used with the dependency injector. 
import { Injectable } from '@angular/core';

//CanActivate - Decides if a route can be activated
import { CanActivate } from '@angular/router';
//to put authservice in protected router 
import { AuthService } from './AuthService';
import {LoginComponent} from './Logincomponent'
@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {}
//active the protected routed and make the return user 
  canActivate(): boolean {
    return this.authService.Logged();
  }
}
