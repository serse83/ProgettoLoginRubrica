/*
 * Angular Imports
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Router,Routes, RouterLink} from '@angular/router';
import {MusicComponent} from 'app/MusicComponent'
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

/*
 * Components
 */
import {SearchComponent} from './SearchComponent';
import {ArtistComponent} from './ArtistComponent';
import {TrackComponent} from './TrackComponent';
import {AlbumComponent} from './AlbumComponent';

/*
 * Services
 */
import { SPOTIFY_PROVIDERS } from './SpotifyService';

/*
 * Webpack
 */
 export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];


export class RoutesMusicApp {
  query: string;
  }

@NgModule({
  declarations: [
    MusicComponent,
    RoutesMusicApp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ MusicComponent ],
  providers: [
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class PagesModule {}

platformBrowserDynamic().bootstrapModule(PagesModule)
  .catch((err: any) => console.error(err));
