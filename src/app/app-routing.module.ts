import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {GenresComponent} from './genres/genres.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path: 'genres', component: GenresComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'songs', component: SongsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
