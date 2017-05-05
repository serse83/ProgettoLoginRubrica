//import modules relatives to AppModule concerning @Angular
import { Component } from '@angular/core';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import modules relatives to Router and redirect 
import {RouterModule,Router,Routes, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
//import modules relatives to the login component and login template (form login) 
import {LoginComponent} from './LoginComponent';
//import modules relatives to the privatecomponent and the protected page (in progress) 
import {ProtectedComponent} from './PrivateComponent';
//import service relatives to the authentication (in progress) 
import {AUTH_PROVIDERS} from './AuthService';
//import modules relatives to the Homecomponent and main page (charge from the router-outlet ) 
import {HomeComponent} from './HomeComponent';
//import service relatives to the private authentication 

import {LoggedInGuard}from './loggedIn.guard'

import{BasicExampleComponent} from './rubrica/rubricadati'
//
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MusicComponent} from 'app/MusicComponent'
import {RoutesApp } from './app.component'
import {SearchComponent} from './Music/SearchComponent';
import {ArtistComponent} from './Music/ArtistComponent';
import {TrackComponent} from './Music/TrackComponent';
import {AlbumComponent} from './Music/AlbumComponent';
import { SPOTIFY_PROVIDERS } from './Music/SpotifyService';
//import {PagesModule} from 'app/Music/pages.module'

//costants concerning the differentes pages 
const routes: Routes = [
{ path: '',          redirectTo: 'home', pathMatch: 'full' },
{ path: 'home',      component: HomeComponent },
//{ path: 'private', redirectTo: 'private', pathMatch: 'full' },

{ path: 'private',  component: ProtectedComponent, 
  canActivate: [LoggedInGuard]
},
{ path: 'music',      component: MusicComponent },
 // { path: '', redirectTo: 'search', pathMatch: 'full' },
  

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
  //  PagesModule,

   // Ng2SmartTableModule,
  //  BasicExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // <-- routes
    Ng2SmartTableModule,
 // PagesModule
    
  ],
  bootstrap: [ RoutesApp ],
  providers: [
    AUTH_PROVIDERS,
   SPOTIFY_PROVIDERS,

   LoggedInGuard,
LoginComponent,
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));