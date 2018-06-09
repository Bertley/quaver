import { Component, OnInit } from '@angular/core';
import { Genre } from './genre'; 
import { GenreService } from '../genre.service'; 

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genre: Genre; 
  genres: Genre[]; 
  
  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe(gs => this.genres = gs); 
  }

}
