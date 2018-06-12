import {Injectable} from '@angular/core';
import {Artist} from './artists/artist';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artists: Artist[] = [
    {name: 'Kanye West', genre: 'Hip-Hop/Rap'},
    {name: 'Drake', genre: 'Hip-Hop/Rap'},
    {name: 'Future', genre: 'Hip-Hop/Rap'},
    {name: 'G-Easy', genre: 'Hip-Hop/Rap'},
    {name: 'Migos', genre: 'Hip-Hop/Rap'},
    {name: 'Post Malone', genre: 'Hip-Hop/Rap'},
    {name: 'Skepta', genre: 'Hip-Hop/Rap'},
    {name: 'Pusha T', genre: 'Hip-Hop/Rap'},
    {name: 'Wizkid', genre: 'Afro-Beats'},
    {name: 'Davido', genre: 'Afro-Beats'},
    {name: 'J Hus', genre: 'Afro-Beats'},
    {name: 'Krept & Konan', genre: 'Afro-Beats'},
    {name: 'Yxng Bane', genre: 'Afro-Beat'},
    {name: 'Loud Luxury', genre: 'Electronic/Dance'},
    {name: 'David Guetta', genre: 'Electronic/Dance'},
    {name: 'Rehab', genre: 'Hip-Hop/Rap'},
    {name: 'Cosmo & Creature', genre: 'Hip-Hop/Rap'},
    {name: 'Felix Cartal', genre: 'Hip-Hop/Rap'},
    {name: 'Digital Farm Animals', genre: 'Hip-Hop/Rap'},
    {name: 'Prince Fox', genre: 'Hip-Hop/Rap'},
  ];

  getArtists(): Observable<Artist[]> {
    return of(this.artists);
  }

  constructor() {
  }
}
