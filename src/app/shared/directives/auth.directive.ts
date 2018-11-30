import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {UserLoginAction} from '../../store/actions/videos.actions';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  constructor(private authService: AuthService,
              private store: Store<State>) { }

  @HostListener('click')
  onclick() {
    this.store.dispatch(new UserLoginAction());
    // this.authService.loginDialog$.subscribe();
    // this.authService.loginDialog$.subscribe();
  }


}
