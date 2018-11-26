import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideosRoutingModule } from './videos-routing.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FormsModule

  ]
})
export class VideosModule { }
