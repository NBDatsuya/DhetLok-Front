import { Component } from '@angular/core';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genreResult = [
    {
      "id": "id",
      "title": "real_name",
      "artist": "artist",
      "genre":"genre",
      "hits":"hits"
    },
    {
      "id": 2,
      "title": "real_name",
      "artist": "artist",
      "genre":"genre",
      "hits":"hits"
    },
    {
      "id": 3,
      "title": "real_name",
      "artist": "artist",
      "genre":"genre",
      "hits":"hits"
    },
  ]

}
