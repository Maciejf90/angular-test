import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Coords } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  // encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {

  show = true;

  red = 'red';

  public coords: Coords;
  public coords2: Coords;

  title = 0;
  data = {
    text: 'title',
    id: 3434
  };

  constructor() { }

  ngOnInit() {

    const teraz = this.title || 'alterantywa';

    // setInterval(() => {
    //   this.title = Date.now();
    // }, 1000);
  }

  onDivClick() {
    this.red = 'green';
    console.log('ON CLICK');
  }

  onMapClick(event) {
    console.log('MAP CLICK', event);
    this.coords = event;
  }

  onHide() {
    this.show = false;
  }

}
