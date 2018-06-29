import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album';
import {CommsService} from '../../comms.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album[];
  albumSelected = '';

  constructor(private comms: CommsService, private router: Router) {
  }

  ngOnInit() {
    this.comms.albumSelected.subscribe(data => this.albumSelected = data);
  }

  onSelection(selected: string) {
    this.comms.selected('album', selected);
    this.router.navigate(['songs']);
  }

}
