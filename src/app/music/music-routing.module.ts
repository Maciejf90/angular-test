import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'artist'
}, {
  path: 'artist',
  component: ArtistComponent,
  children: [{
    path: 'view/:id',
    component: ArtistViewComponent
  }, {
    path: 'edit/:id',
    component: ArtistEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
