import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, YoutubeResponse } from '../search.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let sub: Subscription;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  query: string;
  response$: Observable<YoutubeResponse>;
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

    this.searchService.searchYoutube(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      console.log('RES', res);
      this.response = res;
    });

    this.searchService.searchYoutube(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      console.log('RES', res);
      this.response = res;
    });
    
    this.searchService.searchYoutube(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      console.log('RES', res);
      this.response = res;
    });


  }

  ngOnDestroy(): void {
    console.log('DESTRON')
    this.destroy$.next(1)
  }

}
