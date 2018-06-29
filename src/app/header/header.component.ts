import {Component, OnInit} from '@angular/core';
import {CommsService} from '../comms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Quaver';
  genreSelected = '';
  artistSelected = '';
  albumSelected = '';

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
    this.comms.genreSelected.subscribe(data => this.genreSelected = data);
    this.comms.artistSelected.subscribe(data => this.artistSelected = data);
    this.comms.albumSelected.subscribe(data => this.albumSelected = data);
  }

}
