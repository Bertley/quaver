import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album';
import {CommsService} from '../../comms.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album[];
  albumSelected = '';

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
    this.comms.albumSelected.subscribe(data => this.albumSelected = data);
  }

  onSelection(selected: string) {
    this.comms.selected('album', selected);
  }

}
