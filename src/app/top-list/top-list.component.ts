import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SongService } from "../../service/song.service";
import { FormsModule } from '@angular/forms';

interface Song {
  id: number;
  song_name: string;
  singer: string;
  file_url: string;
  hits: number;
  style: number;
}

@Component({
  selector: 'app-top-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.css'
})
export class ToplistComponent implements OnInit {
  searchResult: Song[] = [];
  searchQuery: string = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchSongs();
  }
  searchSongs(): void {
    this.http.get<Song[]>(`/api/searchsong?singer=${encodeURIComponent(this.searchQuery)}`)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(
        data => this.searchResult = data,
        error => console.error('Error fetching data:', error)
      );
  }

  private handleError(error: any): Observable<never> {
    // 可以在这里添加一些错误处理逻辑，比如显示错误消息
    console.error('An error occurred:', error.error || "Server Error");
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

