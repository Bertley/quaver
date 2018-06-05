import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from '../album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album[];
  @Output() selectedAlbum = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelection(selected: string) {
    this.selectedAlbum.emit(selected);
  }

}
