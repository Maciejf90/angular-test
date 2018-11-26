import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';

import { delay } from 'rxjs/operators';
import { YOUTUBE_API_KEY } from '../shared/tokens';

export interface YoutubeResponse {
  items: any[];
}


@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private key: string
  ) { }

  searchYoutube(query: string): Observable<YoutubeResponse> {

    console.log('search', query);
    return this.http.get<YoutubeResponse>(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=${this.key}`);

    // time = time - 1000;
    // return from([
    //   {
    //     time,
    //     items: [
    //       { name: 'jeden ' },
    //       { name: 'dwa' }
    //     ]
    //   }
    // ]).pipe(
    //   delay(time)
    // );
  }
}
