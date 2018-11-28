import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';

@NgModule({
  declarations: [ArtistComponent, ArtistViewComponent, ArtistEditComponent, ArtistProfileComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
