import {Component, OnInit, Input} from '@angular/core';
import {Genre} from '../genre';
import {CommsService} from '../../comms.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() genre: Genre[];
  genreSelected = '';

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
    this.comms.genreSelected.subscribe(data => this.genreSelected = data);
  }

  onSelection(selected: string) {
    this.comms.selected('genre', selected);
  }

}
