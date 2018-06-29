import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

// 1. Import Components
import { ArtistsComponent } from '../artists/artists.component'; 
import { GenresComponent } from '../genres/genres.component'; 

// 2. Array of route objects 
const routes: Routes = [
  { path: 'genre/:id', component: GenresComponent }, 
]; 

// 3. Import route array 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [ RouterModule ], 
  
})

export class AppRoutingModule { }
