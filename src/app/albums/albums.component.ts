import {Component, OnInit} from '@angular/core';
import {Album} from './album';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  selectedAlbum: string = '';

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => this.albums = data);
  }

  onSelected(selected: string) {
    this.selectedAlbum = selected;
  }

}
