import {Component, OnInit, Input} from '@angular/core';
import {Artist} from '../artist';
import {CommsService} from '../../comms.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist[];
  artistSelected = '';

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
    this.comms.artistSelected.subscribe(data => this.artistSelected = data);
  }

  onSelection(selected: string) {
    this.comms.selected('artist', selected);
  }

}
