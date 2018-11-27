import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/shared/tokens';
import { Video, FavoriteVideo } from 'src/app/models';
import { Observable, Subject, BehaviorSubject, ReplaySubject, of, empty } from 'rxjs';
import { tap, switchMap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private favorites$ = new BehaviorSubject<FavoriteVideo[]>([]);

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

  getFavorites(): Observable<FavoriteVideo[]> {
    return this.favorites$.asObservable();
  }

  addFavorite(video: Video): Observable<any> {

    return of(1).pipe(
      switchMap((v) => this.loadFavorites()),
      switchMap(favorites => {

        if (favorites.find(v => v.id === video.id.videoId)) {
          return empty();
        } else {
          return this.http.post<FavoriteVideo>(this.baseUrl + '/videos', {
            id: video.id.videoId,
            video
          }).pipe(
            switchMap((favoriteVideo) => {
              return this.loadFavorites().pipe(mapTo(favoriteVideo));
            })
          );
        }
      })
    );

    // return this.http.post<FavoriteVideo>(this.baseUrl + '/videos', {
    //   id: video.id.videoId,
    //   video
    // }).pipe(
    //   switchMap((favoriteVideo) => {
    //     return this.loadFavorites().pipe(mapTo(favoriteVideo));
    //   })
    // );
  }

  deleteFavorite(video: Video): Observable<FavoriteVideo[]> {

    return this.http.delete<FavoriteVideo>(this.baseUrl + '/videos/' + video.id.videoId).pipe(
      switchMap((favoriteVideo) => {
        return this.loadFavorites();
      })
    );

  }

  loadFavorites(): Observable<FavoriteVideo[]> {

    return this.http.get<FavoriteVideo[]>(this.baseUrl + '/videos').pipe(
      tap(favorites => this.favorites$.next(favorites))
    );

  }

}
