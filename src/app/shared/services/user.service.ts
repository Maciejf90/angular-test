import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject<User | null>(null);

  get user$() {
    return this._user$.asObservable();
  }

  constructor(

  ) { }
}
