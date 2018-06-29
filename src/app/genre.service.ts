import {Injectable} from '@angular/core';
import {Genre} from './genres/genre';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres: Genre[] = [
    {id: 1, name: 'Hip-Hop', cover: 'https://upload.wikimedia.org/wikipedia/commons/9/98/FullSizeRender-3-871x1050.jpg'},
    {id: 2, name: 'Afro-Beats', cover: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Lasgiidi_-_Bottles_ft_Olamide.jpg'},
    {id: 3, name: 'Electronic/Dance', cover: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Luzes-coloridas.jpg'}
  ];

  getGenres(): Observable<Genre[]> {
    return of(this.genres);
  }

  constructor() {
  }
}
