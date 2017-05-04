import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {RouterModule,Router,Routes, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {LoginComponent} from './LoginComponent';
import {ProtectedComponent} from './PrivateComponent';
import {AUTH_PROVIDERS} from './AuthService';
import {HomeComponent} from './HomeComponent';
import {LoggedInGuard}from './loggedIn.guard'
import { BasicExampleComponent } from './rubrica/basic-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RoutesApp {
  constructor(public router: Router) {
  }
}
