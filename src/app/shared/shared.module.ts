import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { RouterModule } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { AuthDialogComponent } from './dialogs/auth-dialog/auth-dialog.component';
import { AuthDirective } from './directives/auth.directive';
import { MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MatButton, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    MapComponent,
    RxjsComponent,
    HighlightDirective,
    UnlessDirective,
    ImageUrlPipe,
    AuthDialogComponent,
    AuthDirective
  ],
  entryComponents: [AuthDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    MapComponent,
    HighlightDirective,
    UnlessDirective,
    AuthDialogComponent,

    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
