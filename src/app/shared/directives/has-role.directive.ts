import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { BehaviorSubject, Subject, combineLatest, Subscription } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Directive({ selector: '[appHasRole]' })
export class HasRoleDirective implements OnDestroy, OnInit {

  private hasView = false;
  user$ = this.userService.user$;
  roles$ = new BehaviorSubject<string[]>([]);
  destroy$ = new Subject();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) { }

  @Input()
  set appRole(role: string) { }

  @Input()
  set appHasRole(roles: string[]) {
    // tak robić
    this.roles$.next(roles || []);

    // jak nie robić
    // const sub: Subscription = this.user$
    //   .pipe(takeUntil(this.destroy$)) // ->
    //   .subscribe(
    //     (user) => {
    //       console.log('subscribe', roles, user);
    //       if (user && roles.includes(user.role)) {
    //         this.setView();
    //       } else {
    //         this.clearView();
    //       }
    //     }
    //   );
    // sub.unsubscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    combineLatest(this.roles$, this.user$)
      .pipe(
        takeUntil(this.destroy$),
        // przykład że możemy coś jeszcze asynchronicznego zrobić
        // switchMap(([roles, user]) => this.userService.logChange(roles, user))
      )
      .subscribe(
        ([roles, user]) => {
          // console.log('subscribe', roles, user);
          if (user && roles.includes(user.role)) {
            this.setView();
          } else {
            this.clearView();
          }
        }
      );
  }

  setView() {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  clearView() {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
