import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, YoutubeResponse } from '../search.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist, Video, User } from 'src/app/models';
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

  private searchService: SearchService;

  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }

  ngOnInit() {
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
    console.log('DESTROY');
    this.destroy$.next(1);
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

