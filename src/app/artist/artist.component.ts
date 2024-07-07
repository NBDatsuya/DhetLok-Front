import { Component , OnInit } from '@angular/core';
import {SongService} from "../../service/song.service";
import { CommonModule } from '@angular/common';
import {Artist} from "../../model/model";


@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  ArtistResult = [
    {
      "id": "id",
      "title": "real_name",
      'img_url': "img_url",
      "genre":"genre",
      "hits":"hits"
    },
    {
      "id": "id",
      "title": "real_name",
      'img_url': "img_url",
      "genre":"genre",
      "hits":"hits"
    },
    {
      "id": "id",
      "title": "real_name",
      'img_url': "img_url",
      "genre":"genre",
      "hits":"hits"
    },
  ]
}
// export class ArtistComponent implements OnInit {
  // artists: Artist[] = [];

  // constructor(private songService: SongService) { }

  // ngOnInit(): void {
  //   this.getArtists();
  // }
  //
  // getArtists(): void {
  //   this.songService.getArtists().subscribe(
  //     (res: Artist[]) => {
  //       this.artists = res;
  //     },
  //     (error) => {
  //       console.error('Error fetching artists:', error);
  //     }
  //   );
  // }
// }
