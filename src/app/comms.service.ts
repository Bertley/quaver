import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommsService {

  private genre = new BehaviorSubject<string>('');
  genreSelected = this.genre.asObservable();

  private artist = new BehaviorSubject<string>('');
  artistSelected = this.artist.asObservable();

  private album = new BehaviorSubject<string>('');
  albumSelected = this.album.asObservable();

  private song = new BehaviorSubject<string>('');
  songSelected = this.song.asObservable();

  constructor() {
  }

  selected(focus: string, selection: string) {
    if (focus.toLowerCase() === 'genre') {
      // Clear Selections
      this.artist.next('');
      this.album.next('');
      this.song.next('');
      // Assign Selection
      this.genre.next(selection);
    } else if (focus.toLowerCase() === 'artist') {
      // Clear Selections
      this.album.next('');
      this.song.next('');
      // Assign Selection
      this.artist.next(selection);
    } else if (focus.toLowerCase() === 'album') {
      // Clear Selections
      this.song.next('');
      // Assign Selection
      this.album.next(selection);
    } else if (focus.toLowerCase() === 'song') {
      this.song.next(selection);
    }
  }

}
