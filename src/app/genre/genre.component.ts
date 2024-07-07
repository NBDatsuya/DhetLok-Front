import { Component , OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {SongService} from "../../service/song.service";
import {ArtistService} from "../../service/artist.service";

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit{
  genreResult = [
    {
      "id": "0",
      "realName": "real_name",
      "artist": "artist",
      "genre":"genre",
      "hits":"hits"
    }
  ]
  constructor(private songService: SongService) { }
  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(): void {
    this.songService.getByGenre().subscribe(
      (res: any) => {
        console.log(res)
        this.genreResult = res["data"]
      },
      (error) => {
        console.error('Error fetching genre:', error);
      }
    );
  }

}
