
//import modules relatives to AppModule concerning @Angular

import { Component } from '@angular/core';

import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

//import modules relatives to Router and redirect activity

import {RouterModule,Router,Routes, RouterLink} from '@angular/router';

import { FormsModule } from '@angular/forms';

import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

//import modules relatives to the login component and login template (form login) 

//import {AuthService} from './AuthService';

//import modules relatives to the privatecomponent and the protected page (in progress) 

import {ProtectedComponent} from './PrivateComponent';

//import service relatives to the authentication (in progress) 

import {AUTH_PROVIDERS} from './AuthService';

//import modules relatives to the Homecomponent and main page (charge from the router-outlet ) 

import {HomeComponent} from './HomeComponent';

//import service relatives to the private authentication 

import{LoginComponent} from './Logincomponent';

import {LoggedInGuard}from './loggedIn.guard';

import{token} from 'ng-token-auth'

import{BasicExampleComponent} from './rubrica/rubricadati'

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MusicComponent} from 'app/MusicComponent'
import {RoutesApp } from './app.component'
import {SearchComponent} from './Music/SearchComponent';
import {ArtistComponent} from './Music/ArtistComponent';
import {TrackComponent} from './Music/TrackComponent';
import {AlbumComponent} from './Music/AlbumComponent';
import { SPOTIFY_PROVIDERS } from './Music/SpotifyService';
import {DragulaModule} from 'ng2-dragula';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
//import { ExpandableListModule } from 'angular2-expandable-list';
import {HttpModule} from '@angular/http'
//import {PagesModule} from 'app/Music/pages.module'
import {SimpleHTTPComponent} from './http/SimpleHTTPComponent';
//import {YouTubeSearchComponent} from './http/YouTubeSearchComponent';
//import{MoreHTTPRequests} from './http/MoreHTTPRequests';
//import{ social } from 'angularjs-social-login';
import { Angular2SocialLoginModule } from "angular2-social-login";
//import {SocialComponent} from "./Socialcomponent"
//import { fakeBackendProvider } from './http/_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
//import { routing }        from './http/app.routing';

//import { AlertComponent } from './http/_directives/index';
//import { AuthGuard } from './http/_guards/index';
//import { AlertService, AuthenticationService, UserService } from './http/_services/index';
//import { HomeComponent2 } from './http/home/index';
//import { LoginComponent2 } from './http/login/index';
//import { RegisterComponent } from './http/register/index';

 
//costants concerning the differentes pages 

const routes: Routes = [

{ path: '',   redirectTo: 'home', pathMatch: 'full' },

{ path: 'home',      component: HomeComponent },

//{ path: 'private', redirectTo: 'private', pathMatch: 'full' },



{ path: 'private',  component: ProtectedComponent, 

  canActivate: [LoggedInGuard]

},

{ path: 'music',      component: MusicComponent },

 // { path: '', redirectTo: 'search', pathMatch: 'full' },

 { path: 'http',      component: SimpleHTTPComponent },



    { path: 'login', component: LoginComponent },

  //  { path: 'register', component: RegisterComponent },

];



//ng module
@NgModule({
  declarations: [
    RoutesApp,
    HomeComponent,
    ProtectedComponent,
    LoginComponent,
    BasicExampleComponent,
    MusicComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
  SimpleHTTPComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // <-- routes
    Ng2SmartTableModule,
    DragulaModule,
    DatepickerModule,
    HttpModule,
    Angular2SocialLoginModule,
      
  ],
  bootstrap: [ RoutesApp ],
  providers: [
    AUTH_PROVIDERS,
  
   LoggedInGuard,

    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));




