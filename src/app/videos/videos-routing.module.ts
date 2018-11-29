import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'search'
}, {
  path: 'search',
  component: SearchComponent
}, {
  path: 'list',
  component: ListComponent,
  data: {
    roles: ['user']
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
