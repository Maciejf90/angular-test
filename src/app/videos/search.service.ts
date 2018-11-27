import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';

import { delay, map } from 'rxjs/operators';
import { YOUTUBE_API_KEY } from '../shared/tokens';
import { Video } from '../models';

export interface YoutubeResponse {
  items: Video[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private key: string
  ) { }

  searchYoutube(query: string, page = 1): Observable<Video[]> {

    console.log('search', query);

    const endpoint = 'https://www.googleapis.com/youtube/v3/search';

    return this.http.get<YoutubeResponse>(endpoint, {
      params: {
        q: query,
        part: 'snippet',
        key: this.key
      }
    }).pipe(
      map((res) => {
        return res.items;
      }),
      delay(100)
    );

  }
}
