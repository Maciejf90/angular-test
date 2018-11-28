import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artists$: Observable<Artist[]>;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artists$ = this.artistService.getArtists();
  }

}
