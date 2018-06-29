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
  url = 'http://gkona.ca/quaverAPI.php';
  key = '?key=letmein';
  type = '&type=';
  name = '&name=';
  filter = '&filter=';
  order = '&order=';

  // Error handler
  private handleError(error: HttpErrorResponse) {
    console.log('statusText: ' + error.statusText);
    console.log('headers: ' + error.headers);
    console.log('type: ' + error.type);
    console.log('url: ' + error.url);
    return throwError('Something bad happened');
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.url + this.key + this.type + 'genres').pipe(catchError(this.handleError));
  }

  getArtists(filter: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url + this.key + this.type + 'artists' + this.filter + filter).pipe(catchError(this.handleError));
  }

  getAlbums(filter: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.url + this.key + this.type + 'albums' + this.filter + filter).pipe(catchError(this.handleError));
  }

  getSongs(filter: string): Observable<Song[]> {
    return this.http.get<Song[]>(this.url + this.key + this.type + 'songs' + this.filter + filter).pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) {
  }
}
