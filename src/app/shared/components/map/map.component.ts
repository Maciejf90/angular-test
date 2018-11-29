import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChange } from '@angular/core';
import { UserService } from '../../services/user.service';

import * as L from 'leaflet';
import { Coords } from 'src/app/models';

L.Icon.Default.imagePath = '/assets/leaflet/images/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @ViewChild('mapContainer')
  mapContainer: ElementRef;

  private map: L.Map;
  private marker;
  @Input()
  set coords(coords: Coords) {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    if (this.map) {
      this.marker = L.marker(coords).addTo(this.map);
      this.map.panTo(coords);
    }
  }

  @Output()
  mapClick = new EventEmitter<Coords>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {


    const map = L.map(this.mapContainer.nativeElement).setView([51.505, -0.09], 13);
    this.map = map;

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png`', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    map.on('click', (e: L.LeafletMouseEvent) => {
      this.mapClick.next(e.latlng);
    });


    // this.mapClick.emit('nasz event');
    console.log('L', L);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('coords')) {
      console.log('coords change', changes.coords);
    }
  }

}



// class MapaVJava {
//   private map;
//   getMap() {
//     return this.map;
//   }
// }

// class MapaV1 {
//   public map;
// }

// class Mapa {

//   private _map;

//   set map(m) {
//     console.log('set', m);
//     this._map = m;
//   }
//   get map() {
//     console.log('get', this._map);
//     return this._map;
//   }
// }

// const instancjaMapy = new Mapa();

// instancjaMapy.map = 'leaflet';
// console.log('get map property', instancjaMapy.map);
