import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { RxjsComponent } from './shared/components/rxjs/rxjs.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'rxjs',
  component: RxjsComponent
}, {
  path: 'videos',
  loadChildren: './videos/videos.module#VideosModule'
}, {
  path: 'music',
  loadChildren: './music/music.module#MusicModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
