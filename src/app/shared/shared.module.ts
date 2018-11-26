import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    MapComponent
  ]
})
export class SharedModule { }
