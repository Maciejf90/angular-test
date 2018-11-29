import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {


  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialogRef<AuthDialogComponent>
    ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialog.close(null);
  }

  onLogin() {
    if (this.loginForm.valid) {

      const data = this.loginForm.value;
      this.userService.login(data.username, data.password).subscribe(user => {
        console.log('SUCCESS', user);
        this.dialog.close(user);
      }, (err) => {
        console.log('ERR', err);
      });

    }
    console.log('data', this.loginForm.valid, this.loginForm.value);
  }
}

}
