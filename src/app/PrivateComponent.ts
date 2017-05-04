import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {LoggedInGuard}from './loggedIn.guard'

@Component({
  selector: 'private',
  templateUrl: "./Rubrica/privatehome.html",
  styleUrls: ['app.component.css'],
})
export class ProtectedComponent {
}
