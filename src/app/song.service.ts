import {Injectable} from '@angular/core';
import {Song} from './songs/song';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Song[] = [
    {name: 'Song 1', trackIndex: 1, trackTime: 1.50, album: 'Album 1'},
    {name: 'Song 2', trackIndex: 1, trackTime: 1.50, album: 'Album 2'},
    {name: 'Song 3', trackIndex: 1, trackTime: 1.50, album: 'Album 3'},
    {name: 'Song 4', trackIndex: 1, trackTime: 1.50, album: 'Album 4'},
    {name: 'Song 5', trackIndex: 1, trackTime: 1.50, album: 'Album 5'}
  ];

  constructor() {
  }

  getSongs(): Observable<Song[]> {
    return of(this.songs);
  }
}
