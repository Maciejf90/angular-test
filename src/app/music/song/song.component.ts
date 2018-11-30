import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from 'src/app/models';
import { tap, map, switchMap } from 'rxjs/operators';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  song$: Observable<Song>;
  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {

    this.route.parent.params.subscribe(params => console.log('parent', params));
    // this.route.paramMap.subscribe((p: ParamMap) => p)
    this.song$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.artistService.getSong(id))
    );
  }

}
