import { Component , OnInit } from '@angular/core';
import {SongService} from "../../service/song.service";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Artist} from "../../model/model";
import {ArtistService} from "../../service/artist.service";


@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent implements OnInit {
  artists= [
    {
      "id": 0,
      "realName": "real_name",
      'imgUrl': "imgUrl",
      "genre":0,
      "hot":false
    },
    {
      "id": 0,
      "realName": "real_name",
      'imgUrl': "imgUrl",
      "genre":0,
      "hot":false
    },
    {
      "id": 0,
      "realName": "real_name",
      'imgUrl': "imgUrl",
      "genre":0,
      "hot":false
    },
  ]


  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.artistService.getArtists().subscribe(
      (res: any) => {
        console.log(res)
        this.artists = res["data"]
      },
      (error) => {
        console.error('Error fetching artists:', error);
      }
    );
  }
}
