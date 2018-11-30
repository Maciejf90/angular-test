import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError, Subject, interval, merge } from 'rxjs';
import { User } from 'src/app/models';
import { BASE_URL } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User | null>(null);

  get user$() {
    return this._user$.asObservable();
  }

  constructor(
    @Inject(BASE_URL) private baseUrl,
    private http: HttpClient
  ) {

    // get user from session
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      try {
        this._user$.next(JSON.parse(userFromStorage));
      } catch (error) {
        console.log('ERROR parsowania', error);
      }
    }
    // update user in session
    this._user$.subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
    });

    /**
     * IDLE TIME
     */

    merge(
      of(1),
      this.onRequest$,
      this.refreshButtonClick$
    ).pipe(
      switchMap(() => {
        return interval(1000);
      }),
      map((time: number) => {
        return this.sessionDuration - time;
      }),
      filter((time: number) => time >= 0)
      // map((time: number) => {
      //   return time >= 0 ? time : 0;
      // })
    ).subscribe(time => {
      // console.log('time', time);
      if (time === 0) {
        this.logout().subscribe();
      }
      // if (!time && this._idleTime$.getValue() !== 0) {
      //   this.logout().subscribe();
      // }
      this._idleTime$.next(time);
    });

  }

  private sessionDuration = 6;
  private onRequest$ = new Subject();
  public refreshButtonClick$ = new Subject();

  private _idleTime$ = new BehaviorSubject(this.sessionDuration);

  get idleTime$() {
    return this._idleTime$.asObservable();
  }

  onRequest(req) {
    // console.log('HTTP REQ', req);
    this.onRequest$.next();
  }

  logout(): Observable<null> {
    return Observable.create(observer => {
      this._user$.next(null);
      observer.next(null);
      observer.complete();

      return () => { };
    });
  }

  login(username: string, password: string): Observable<User> {
    // console.log('up', username, password);
    // FIX - tylko do celow demonstracyjnych i mockowych
    return this.http.get<User[]>(this.baseUrl + '/users', {
      params: {
        name: username,
        password: password
      }
    }).pipe(
      // NIE
      // map(users => {
      //   if (users[0]) {
      //     return users[0];
      //   } else {
      //     throw new Error('forbidden');
      //   }
      // }),

      // TAK
      switchMap(users => {
        if (users[0]) {
          return of(users[0]);
        } else {
          return throwError('not found');
        }
      }),
      tap(user => this._user$.next(user))
    );
  }

}
