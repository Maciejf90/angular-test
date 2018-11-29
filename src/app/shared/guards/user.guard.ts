import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // return this.userService.user$.pipe(
    return this.authService.loginDialog$.pipe(
      map(user => {
        if (next.data.roles && user && next.data.roles.includes(user.role)) {
          return true;
        } else {
          this.router.navigate(['/error/forbidden']);
          return false;
        }
      })
    );

  }
}
