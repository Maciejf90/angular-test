import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { RouterModule } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    MapComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    MapComponent
  ]
})
export class SharedModule { }
