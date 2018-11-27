import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { YOUTUBE_API_KEY, BASE_URL, IMAGES_BASE_URL } from './shared/tokens';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: YOUTUBE_API_KEY,
    useValue: environment.youtubeApiKey
  }, {
    provide: BASE_URL,
    useValue: environment.baseUrl
  },
  {
    provide: IMAGES_BASE_URL,
    useValue: environment.imagesBaseUrl
  }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
