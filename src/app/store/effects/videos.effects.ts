import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {UserLoginResponseAction, VideosActionTypes} from '../actions/videos.actions';
import {AuthService} from '../../shared/services/auth.service';
import {map, switchMap} from 'rxjs/operators';

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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
