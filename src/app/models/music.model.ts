export interface Coords {
  lat: number;
  lng: number;
}
export interface Artist {
  id: number;
  name: string;
  img: string;
  location?: Coords;
}
export interface Playlist {
  id: number;
  name: string;
}

// export class Playlist {
//   id: number;
//   name: string;
//   constructor(data: Partial<Playlist>) {
//     Object.apply(this, data);
//   }
//   getSongs() {
//     return this.name;
//   }
// }

export interface PlaylistSongs {
  id: number;
  playlistId: number;
  songId: number;
  song?: Song;
  playlist?: Playlist;
}

export interface Song {
  id: number;
  title: string;
  year: string;
  artistId: number;
  webUrl: string;
  genders?: string[];
  favorite?: boolean;
}
