import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models';
import { Observable } from 'rxjs';
import { map, switchMap, distinctUntilChanged, delay } from 'rxjs/operators';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  public artist$: Observable<Artist>;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {

    // this.route.paramMap.subscribe(param => console.log('params', param));

    this.artist$ = this.route.paramMap.pipe(

      map(paramsMap => paramsMap.get('id')),

      distinctUntilChanged(),

      // merge(this.onBtnClick$),
      switchMap((id) => {
        return this.artistService.getArtist(id); // .pipe(delay(1000));
      })

    );

  }

}
