import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {UserLoginResponseAction, VideosActionTypes, VideoSearchResponseAction} from '../actions/videos.actions';
import {AuthService} from '../../shared/services/auth.service';
import {map, switchMap} from 'rxjs/operators';
import {SearchService} from '../../videos/search.service';

@Injectable()
export class VideosEffects {

  @Effect()
  userLogin$ = this.actions$.pipe(
    ofType(VideosActionTypes.UserLogin),
    switchMap(() => this.authService.loginDialog$.pipe(
    map(user => new UserLoginResponseAction(user))
    )
  )
  );

  @Effect()
  videoSearch$ = this.actions$.pipe(
    ofType(VideosActionTypes.VideoSearch),
    switchMap((action: any) => this.searchService.searchYoutube(action.payload).pipe(
      map(videos => new VideoSearchResponseAction(videos))
      )
    )
  );
  constructor(private actions$: Actions, private authService: AuthService,
              private searchService: SearchService) {}
}
