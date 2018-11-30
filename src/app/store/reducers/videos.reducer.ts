import { Action } from '@ngrx/store';
import { VideosActions, VideosActionTypes } from '../actions/videos.actions';
import {User, Video} from '../../models';

export interface State {
  credits: string;
  user: User | null;
  videos: Video[];

}

export const initialState: State = {
  user: null,
  videos: [],
  credits: 'Szkolenie z angular'

};

export function reducer(state = initialState, action: VideosActions): State {
  switch (action.type) {

    case VideosActionTypes.UserLoginResponse:
      return {
        ...state,
        user: action.payload
      };

    case VideosActionTypes.UpdateCredits:
      return {
        ...state,
        credits: action.payload
      };


    default:
      return state;
  }
}
