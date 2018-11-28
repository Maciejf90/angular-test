import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/shared/tokens';
import { Artist } from 'src/app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl + '/artists');
  }

  getArtist(id): Observable<Artist> {
    return this.http.get<Artist>(this.baseUrl + '/artists/' + id);
  }
}
