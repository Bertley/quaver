import { Injectable } from '@angular/core';
import { Genre } from './genres/genre'; 
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres: Genre[] = [
    {id: 1, name: 'Hip-Hop'}, 
    {id: 2, name: 'Afro-Beats'},
    {id: 3, name: 'Electronic/Dance'}
  ]; 

  getGenres(): Observable<Genre[]>{
    return of(this.genres); 
  }

  constructor() { }
}
