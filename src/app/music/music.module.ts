import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SongComponent } from './song/song.component';
import { SongFormComponent } from './components/song-form/song-form.component';

@NgModule({
  declarations: [ArtistComponent, ArtistViewComponent, ArtistEditComponent, ArtistProfileComponent, SongComponent, SongFormComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MusicModule { }
