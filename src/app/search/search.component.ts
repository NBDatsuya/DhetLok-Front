import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song.service";
import {FormsModule} from "@angular/forms";
import {catchError, of, tap} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  keyword = ""
  constructor(private songService: SongService) {
  }
  ngOnInit(): void {
    this.refreshList()
  }

  refreshList(){
    this.searchResult.length = 0
    let storeData = localStorage.getItem("searchResult")
    this.searchResult = JSON.parse(storeData?storeData:"[]")
  }

  searchResult = [
    {
      "id": 1,
      "realName": "Yesterday Once More",
      "artist": "The Carpenter",
      "hits": 2,
      "style": 1
    },
    {
      "id": 2,
      "realName": "Top of the World",
      "artist": "The Carpenter",
      "hits": 3,
      "style": 1
    },
    {
      "id": 3,
      "realName": "Please Mr. Postman",
      "artist": "The Carpenter",
      "hits": 4,
      "style": 1
    },
    {
      "id": 4,
      "realName": "Close to You",
      "artist": "The Carpenter",
      "hits": 5,
      "style": 1
    },
    {
      "id": 5,
      "realName": "Rainy Days and Mondays",
      "artist": "The Carpenter",
      "hits": 2,
      "style": 1
    }
  ]

  doSearch(){
    this.songService.searchSongs(this.keyword).pipe(
      tap((response: any) => {

        if (!response.code) {
          localStorage.setItem('searchResult', JSON.stringify(response.data));
        } else {
          return
        }
      }),

      catchError((error: any) => {
        console.error('服务器异常，原因：', error);
        alert(error.message);
        return of(null); // Return a safe value or an observable to continue the stream
      })
    ).toPromise().then(r => r);
    this.refreshList()
  }
}
