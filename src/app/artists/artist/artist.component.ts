import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist'; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist: Artist[]; 

  constructor() { }

  ngOnInit() {
  }

}
