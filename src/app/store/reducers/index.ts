import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromVideos from './videos.reducer';

export interface State {

  videos: fromVideos.State;
}

export const reducers: ActionReducerMap<State> = {

  videos: fromVideos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
