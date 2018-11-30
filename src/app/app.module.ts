import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YOUTUBE_API_KEY, BASE_URL, IMAGES_BASE_URL } from './shared/tokens';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './shared/interceptors/http-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromVideos from './store/reducers/videos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VideosEffects } from './store/effects/videos.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('videos', fromVideos.reducer),
    EffectsModule.forRoot([VideosEffects])
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
  },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
