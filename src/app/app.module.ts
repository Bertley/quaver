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
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

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
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
