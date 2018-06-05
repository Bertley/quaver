import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { GenreComponent } from './genres/genre/genre.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './songs/song/song.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    GenreComponent,
    ArtistsComponent,
    ArtistComponent,
    AlbumsComponent,
    AlbumComponent,
    SongsComponent,
    SongComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
