import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideosRoutingModule } from './videos-routing.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoItemComponent } from './components/video-item/video-item.component';

@NgModule({
  declarations: [SearchComponent, VideoItemComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FormsModule

  ]
})
export class VideosModule { }
