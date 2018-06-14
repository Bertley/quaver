import {Injectable} from '@angular/core';
import {Artist} from './artists/artist';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artists: Artist[] = [
    {name: 'Kanye West', genre: 'Hip-Hop'},
    {name: 'Drake', genre: 'Hip-Hop'},
    {name: 'Future', genre: 'Hip-Hop'},
    {name: 'G-Eazy', genre: 'Hip-Hop'},
    {name: 'Migos', genre: 'Hip-Hop'},
    {name: 'Post Malone', genre: 'Hip-Hop'},
    {name: 'Skepta', genre: 'Hip-Hop'},
    {name: 'Pusha T', genre: 'Hip-Hop'},
    {name: 'WizKid', genre: 'Afro-Beats'},
    {name: 'DaVido', genre: 'Afro-Beats'},
    {name: 'J Hus', genre: 'Afro-Beats'},
    {name: 'Krept & Konan', genre: 'Afro-Beats'},
    {name: 'Yxng Bane', genre: 'Afro-Beat'},
    {name: 'Loud Luxury', genre: 'Electronic/Dance'},
    {name: 'David Guetta', genre: 'Electronic/Dance'},
    {name: 'Rehab', genre: 'Hip-Hop'},
    {name: 'Cosmo & Creature', genre: 'Hip-Hop'},
    {name: 'Felix Cartal', genre: 'Hip-Hop'},
    {name: 'Digital Farm Animals', genre: 'Hip-Hop'},
    {name: 'Prince Fox', genre: 'Hip-Hop'},
  ];

  getArtists(): Observable<Artist[]> {
    return of(this.artists);
  }

  constructor() {
  }
}
