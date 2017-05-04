import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {RoutesApp } from './app.component'
import {SearchComponent} from './Music/SearchComponent';
import {ArtistComponent} from './Music/ArtistComponent';
import {TrackComponent} from './Music/TrackComponent';
import {AlbumComponent} from './Music/AlbumComponent';

@Component({
  selector: 'music',
  templateUrl: "./Music/musichome.html",
  styleUrls: ['app.component.css'],
})
export class MusicComponent {
}
