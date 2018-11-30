import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Coords } from 'src/app/models';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State} from '../../../store/reducers/videos.reducer';
import {UpdateCreditsAction} from '../../../store/actions/videos.actions';

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
  credits$: Observable<string> = this.store.select('videos', 'credits');

  constructor(public store: Store<State>) { }

  ngOnInit() {

    const teraz = this.title || 'alterantywa';

    // setInterval(() => {
    //   this.title = Date.now();
    // }, 1000);
  }
  updateCredits() {
    this.store.dispatch(
      new UpdateCreditsAction('New credits' + Date.now())
    );
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
