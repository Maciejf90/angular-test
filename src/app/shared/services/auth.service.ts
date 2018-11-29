import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { AuthDialogComponent } from '../dialogs/auth-dialog/auth-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private dialog: MatDialog
    ) { }

  public loginDialog$ = this.userService.user$.pipe(
    switchMap(user => {
      if (!user) {
        // show dialog
        const dialogRef = this.dialog.open(AuthDialogComponent);

        return dialogRef.afterClosed();
      } else {
        return of(user);
      }
    })
  );
}
// switchMap(user => {

    //   if (!user) {
    //     const dialogRef = this.dialog.open(AuthDialogComponent, {
    //       height: '400px',
    //       width: '600px',
    //     });

    //     return dialogRef.afterClosed();
    //   } else {
    //     return of(user);
    //   }
    // }),
    // share(),
    // take(1)
