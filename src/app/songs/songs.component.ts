import {Component, Input, OnInit} from '@angular/core';
import {Song} from './song';
import {SongService} from '../song.service';
import {CommsService} from '../comms.service';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  title = 'Songs';
  // @Input() album: string;
  songs: Song[];
  albumSelected = '';

  constructor(private songService: SongService, private comms: CommsService, private api: ApiService) {
  }

  ngOnInit() {
    // this.songService.getSongs().subscribe(data => this.songs = data);
    this.comms.albumSelected.subscribe(data => this.albumSelected = data);
    this.api.getSongs(this.albumSelected).subscribe(data => this.songs = data);
  }

}
