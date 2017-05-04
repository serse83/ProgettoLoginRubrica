import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {LoggedInGuard}from './loggedIn.guard'

@Component({
  selector: 'private',
  templateUrl: "./private.html"
})
export class ProtectedComponent {
}
