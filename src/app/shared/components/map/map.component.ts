import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

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

  constructor(private userService: UserService) {
    console.log('USER', userService);
   }

  ngOnInit() {
    this.mapClick.emit('nasz event');
  }

}
