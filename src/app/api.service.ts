import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, throwError} from 'rxjs';

import {Genre} from './genres/genre';
import {Artist} from './artists/artist';
import {Album} from './albums/album';
import {Song} from './songs/song';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // Quaver API Endpoint
  urlA = 'http://gkona.ca/quaverAPI.php';
  keyA = '?key=letmein';
  type = '&type=';
  name = '&name=';
  filter = '&filter=';
  order = '&order=';

  urlB = 'http://edialu.com/quaver/index.php';
  keyB = '?key=ssdmiwhyup';
  genre = '&genre=';

  // Error handler
  private handleError(error: HttpErrorResponse) {
    console.log('statusText: ' + error.statusText);
    console.log('headers: ' + error.headers);
    console.log('type: ' + error.type);
    console.log('url: ' + error.url);
    return throwError('Something bad happened');
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.urlA + this.keyA + this.type + 'genres').pipe(catchError(this.handleError));
  }

  getArtists(filter: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.urlB + this.keyB + this.genre + 'all').pipe(catchError(this.handleError));
  }

  getAlbums(filter: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.urlA + this.keyA + this.type + 'albums' + this.filter + filter).pipe(catchError(this.handleError));
  }

  getSongs(filter: string): Observable<Song[]> {
    return this.http.get<Song[]>(this.urlA + this.keyA + this.type + 'songs' + this.filter + filter).pipe(catchError(this.handleError));
  }

  randGenre(): Observable<Genre> {
    return this.http.get<Genre>(this.urlA + this.keyA + this.type + 'genres' + this.order + 'rand').pipe(catchError(this.handleError));
  }

  randArtist(): Observable<Artist> {
    return this.http.get<Artist>(this.urlA + this.keyA + this.type + 'artists' + this.order + 'rand').pipe(catchError(this.handleError));
  }

  randAlbum(): Observable<Album> {
    return this.http.get<Album>(this.urlA + this.keyA + this.type + 'albums' + this.order + 'rand').pipe(catchError(this.handleError));
  }

  randSong(): Observable<Song> {
    return this.http.get<Song>(this.urlA + this.keyA + this.type + 'songs' + this.order + 'rand').pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) {
  }
}
