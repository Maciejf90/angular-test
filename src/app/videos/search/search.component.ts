import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, YoutubeResponse } from '../search.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist, Video, User, FavoriteVideo } from 'src/app/models';
import { VideoService } from '../services/video.service';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers/videos.reducer';
import {SearchVideoAction, UpdateCreditsAction, VideoSearchAction} from '../../store/actions/videos.actions';
// import { Playlist } from 'src/app/models/music.model';
// import { Video } from 'src/app/models/video.model';

// const p: Playlist;
// const v: Video;
// const v2: User;


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  query: string;
  query$: Observable<string>;
  response$: Observable<Video[]>;
  response: YoutubeResponse;

  destroy$ = new Subject();

  favorites$: Observable<FavoriteVideo[]>;

  private searchService: SearchService;

  constructor(searchService: SearchService, private videoService: VideoService,
              public store: Store<State>) {
    this.searchService = searchService;
  }

  ngOnInit() {
    this.videoService.loadFavorites().subscribe(v => console.log('V', v));
    this.favorites$ = this.videoService.getFavorites();
    this.response$ = this.store.select('videos', 'videos');
    this.query$ = this.store.select('videos', 'videoQuery');
  }

  addFavorite(video: Video) {
    this.videoService.addFavorite(video).subscribe(
      v => console.log('V', v),
      err => console.log('err', err)
    );
  }

  deleteFavorite(fv: FavoriteVideo) {
    this.videoService.deleteFavorite(fv.video).subscribe(
      v => console.log('V', v),
      err => console.log('err', err)
    );
  }

  onSearch() {
    console.log('submit', this.query);
    // this.response$ = this.searchService.searchYoutube(this.query);
    this.store.dispatch(new VideoSearchAction(this.query));

    // if(sub) {
    //   sub.unsubscribe();
    // }

    // this.searchService.searchYoutube(this.query).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(res => {
    //   console.log('RES', res);
    //   this.response = res;
    // });


  }

  ngOnDestroy(): void {

  }
}
// const playlista: Playlist = {
//   id: 4,
//   name: 'name'
// };
// const playlista2: Playlist = {
//   id: 4,
// };

// playlista2.name.toString();

