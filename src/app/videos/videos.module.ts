import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideosRoutingModule } from './videos-routing.module';
import { SearchComponent } from './search/search.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoDialogComponent } from './dialogs/video-dialog/video-dialog.component';
import { MatDialogModule } from '@angular/material';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [SearchComponent, VideoItemComponent, VideoDialogComponent, ListComponent],
  entryComponents: [VideoDialogComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FormsModule,
     MatDialogModule
  ]
})
export class VideosModule { }
