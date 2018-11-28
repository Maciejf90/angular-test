import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, distinctUntilChanged, delay, tap, takeUntil } from 'rxjs/operators';
import { ArtistService } from '../services/artist.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit, OnDestroy {

  isEdit = false;

  public artist$: Observable<Artist>;
  public artists$: Observable<Artist[]>;

  destroy$ = new Subject();
  artistForm: FormGroup;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {


    // this.route.paramMap.subscribe(param => console.log('params', param));

    this.artists$ = this.artistService.getArtists();

    this.artist$ = this.route.paramMap.pipe(

      map(paramsMap => paramsMap.get('id')),
      switchMap((id) => {
        return this.artistService.getArtist(id);
      }),

      tap(artist => this.artistForm.patchValue(artist))

    );

    this.artistForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      img: new FormControl(''),
    });

  }

  save() {
    console.log('save', this.artistForm.value);
    this.artistService.updateArtist(this.artistForm.value).pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      s => console.log('S', s),
      err => console.log('err', err)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
  }
}
