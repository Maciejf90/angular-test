import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/shared/tokens';
import { Artist } from 'src/app/models';
import { Observable, Subject, of } from 'rxjs';
import { merge } from 'rxjs';
import { tap, startWith, switchMap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  // private _baseUrl2: string;
  // get baseUrl2() {
  //   if (!this._baseUrl2) {
  //     this._bseUrl2 = this.injector.get(BASE_URL);
  //   }
  //   return this._baseUrl2;
  // }

  reload$ = new Subject();

  getArtists$ = this.http.get<Artist[]>(this.baseUrl + '/artists').pipe(share());

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

  getArtists(): Observable<Artist[]> {

    // console.log(this.baseUrl2)

    return merge(
      this.reload$,
      of(1)
    ).pipe(
      switchMap(() => this.getArtists$)
    );
  }

  getArtist(id): Observable<Artist> {

    return merge(
      this.reload$,
      of(1)
    ).pipe(
      switchMap(() => this.http.get<Artist>(this.baseUrl + '/artists/' + id))
    );
    // return this.http.get<Artist>(this.baseUrl + '/artists/' + id);
  }

  updateArtist(artist: Artist): Observable<Artist> {

    return this.http.patch<Artist>(this.baseUrl + '/artists/' + artist.id, artist).pipe(
      tap(() => this.reload$.next(1))
    );

  }
}
