import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  @Input()
  coords = 99999;

  @Output()
  mapClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.mapClick.emit('nasz event');
  }

}
