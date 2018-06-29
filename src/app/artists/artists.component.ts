import {Component, OnInit, Input} from '@angular/core';
import {Artist} from './artist';
import {ArtistService} from '../artist.service';
import {CommsService} from '../comms.service';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  title = 'Artists';
  // @Input() genre: string;
  artists: Artist[];
  // artistSelected = '';
  genreSelected = '';

  constructor(private artistService: ArtistService, private comms: CommsService, private api: ApiService) {
  }

  ngOnInit() {
    // this.artistService.getArtists().subscribe(ar => this.artists = ar);
    // this.comms.artistSelected.subscribe(data => this.artistSelected = data);
    this.comms.genreSelected.subscribe(data => this.genreSelected = data);
    this.api.getArtists(this.genreSelected).subscribe(data => this.artists = data);
  }
}
