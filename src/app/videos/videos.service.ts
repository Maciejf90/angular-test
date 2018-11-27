// import { Injectable, Inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Subject, Observable } from 'rxjs';
// import { startWith, merge, switchMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class VideosService {

//   reload$ = new Subject();

//   constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

//   getVideos(): Observable<Video[]> {

//     return Observable.create().pipe(
//       startWith(1),
//       merge(this.reload$),
//       switchMap((v) => {
//         return this.http.get<Video[]>(this.baseUrl + '/videos');
//       })
//     );
//   }

//   getSongById(id: string | number): Observable<Video> {
//     return this.http.get<Video>(this.baseUrl + '/videos/' + id);
//   }


// }
