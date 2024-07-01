import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchResult = [
    {
      "id": 1,
      "title": "Yesterday Once More",
      "artist": "The Carpenter",
      "hits": 2,
      "style": 1
    },
    {
      "id": 2,
      "title": "Top of the World",
      "artist": "The Carpenter",
      "hits": 3,
      "style": 1
    },
    {
      "id": 3,
      "title": "Please Mr. Postman",
      "artist": "The Carpenter",
      "hits": 4,
      "style": 1
    },
    {
      "id": 4,
      "title": "Close to You",
      "artist": "The Carpenter",
      "hits": 5,
      "style": 1
    },
    {
      "id": 5,
      "title": "Rainy Days and Mondays",
      "artist": "The Carpenter",
      "hits": 2,
      "style": 1
    }
  ]
}
