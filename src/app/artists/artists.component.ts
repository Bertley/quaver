import { Component, OnInit } from '@angular/core';
import { Artist } from './artist'; 
import { ArtistService } from '../artist.service'; 

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artist: Artist; 
  artists: Artist[]; 

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.artistService.getArtists().subscribe(ar =>this.artists = ar); 
  }

}
