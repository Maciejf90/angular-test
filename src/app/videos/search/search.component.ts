import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, YoutubeResponse } from '../search.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist, Video, User, FavoriteVideo } from 'src/app/models';
import { VideoService } from '../services/video.service';
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
  response$: Observable<Video[]>;
  response: YoutubeResponse;

  destroy$ = new Subject();

  favorites$: Observable<FavoriteVideo[]>;

  private searchService: SearchService;

  constructor(searchService: SearchService, private videoService: VideoService) {
    this.searchService = searchService;
  }

  ngOnInit() {
    this.videoService.loadFavorites().subscribe(v => console.log('V', v));
    this.favorites$ = this.videoService.getFavorites();
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

    this.response$ = this.searchService.searchYoutube(this.query);

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
// const playlista: Playlist = {
//   id: 4,
//   name: 'name'
// };
// const playlista2: Playlist = {
//   id: 4,
// };

// playlista2.name.toString();

