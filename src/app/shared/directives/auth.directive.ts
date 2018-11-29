import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective {

  constructor(private authService: AuthService) { }

  @HostListener('click')
  onclick() {
    this.authService.loginDialog$.subscribe();
    this.authService.loginDialog$.subscribe();
  }


}
