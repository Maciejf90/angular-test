import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/models';
import { BASE_URL } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap } from 'rxjs/operators';

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
    console.log('up', username, password);
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
