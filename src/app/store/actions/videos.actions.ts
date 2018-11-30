import { Action } from '@ngrx/store';
import {User, Video} from '../../models';

export enum VideosActionTypes {
  LoadVideoss = '[Videos] Load Videoss',
  UpdateCredits = '[Videos] Update Credits',
  UserLogin = '[User] User Login',
  UserLoginResponse = '[User] User Login Response',
  VideoSearch = '[Video] Search video',
  VideoSearchResponse = '[Video] Search video response',
  VideoSearchError = '[Video] Search video error'
}

export class LoadVideoss implements Action {
  readonly type = VideosActionTypes.LoadVideoss;
}

export class UpdateCreditsAction implements Action {
  readonly type = VideosActionTypes.UpdateCredits;
  constructor(public payload: string) {}
}
export class UserLoginAction implements Action {
  readonly type = VideosActionTypes.UserLogin;
}
export class UserLoginResponseAction implements Action {
  readonly type = VideosActionTypes.UserLoginResponse;
  constructor(public payload: User | null) {}
}
export class VideoSearchAction implements Action {
  readonly type = VideosActionTypes.VideoSearch;
  constructor(public payload: string) {}
}
export class VideoSearchResponseAction implements Action {
  readonly type = VideosActionTypes.VideoSearchResponse;
  constructor(public payload: Video[]) {}
}
export class VideoSearchErrorAction implements Action {
  readonly type = VideosActionTypes.VideoSearchError;
  constructor(public payload: Video[]) {}
}

export type VideosActions = LoadVideoss | UpdateCreditsAction;
