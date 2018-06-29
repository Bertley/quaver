import {Component, OnInit} from '@angular/core';
import {Genre} from '../genres/genre';
import {Artist} from '../artists/artist';
import {Album} from '../albums/album';
import {Song} from '../songs/song';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss']
})
export class LuckyComponent implements OnInit {
  title = 'Find Something New';
  genre: Genre;
  artist: Artist;
  album: Album;
  song: Song;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.randGenre().subscribe(data => this.genre = data);
  }

  rand(data: string) {
    switch (data) {
      case 'genre':
        this.api.randGenre().subscribe(data => this.genre = data);
        break;
      case 'artist':
        this.api.randArtist().subscribe(data => this.artist = data);
        break;
      case 'album':
        this.api.randAlbum().subscribe(data => this.album = data);
        break;
      case 'song':
        this.api.randSong().subscribe(data => this.song = data);
        break;
    }
  }

}
