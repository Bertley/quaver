import {Injectable} from '@angular/core';
import {Album} from './albums/album';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Album[] = [
    {name: 'Album 1', year: 2018, artist: 'Artist 1'},
    {name: 'Album 2', year: 2018, artist: 'Artist 2'},
    {name: 'Album 3', year: 2018, artist: 'Artist 3'},
    {name: 'Album 4', year: 2018, artist: 'Artist 4'},
    {name: 'Album 5', year: 2018, artist: 'Artist 5'}
  ];

  constructor() {
  }

  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }
}
