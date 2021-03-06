import {Component, OnInit, Input} from '@angular/core';
import {Album} from './album';
import {AlbumService} from '../album.service';
import {CommsService} from '../comms.service';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  title = 'Albums';
  // @Input() artist: string;
  albums: Album[];
  // albumSelected = '';
  artistSelected = '';

  constructor(private albumService: AlbumService, private comms: CommsService, private api: ApiService) {
  }

  ngOnInit() {
    // this.albumService.getAlbums().subscribe(data => this.albums = data);
    // this.comms.albumSelected.subscribe(data => this.albumSelected = data);
    this.comms.artistSelected.subscribe(data => this.artistSelected = data);
    this.api.getAlbums(this.artistSelected).subscribe(data => this.albums = data);
  }
}
