import {Component, OnInit} from '@angular/core';
import {Genre} from './genre';
import {GenreService} from '../genre.service';
import {CommsService} from '../comms.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  title = 'Genres';
  genres: Genre[];
  genreSelected = '';

  constructor(private genreService: GenreService, private comms: CommsService) {
  }

  ngOnInit() {
    this.genreService.getGenres().subscribe(gs => this.genres = gs);
    this.comms.genreSelected.subscribe(data => this.genreSelected = data);
  }

}
