import { Component } from '@angular/core';

@Component({
  selector: 'app-collect',
  standalone: true,
  imports: [],
  templateUrl: './collect.component.html',
  styleUrl: './collect.component.css'
})
export class CollectComponent {
  collectResult = [
    {
      "id": "id",
      "img_url": "img_url",
      "title": "real_name",
      "artist": "artist",
      "genre":"genre"
    },
    {
      "id": 2,
      "img_url": "img_url",
      "title": "real_name",
      "artist": "artist",
      "genre":"genre"
    },
    {
      "id": 3,
      "img_url": "img_url",
      "title": "real_name",
      "artist": "artist",
      "genre":"genre"
    },
  ]
}
