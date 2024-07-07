import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, tap} from 'rxjs';
import {Artist, Song} from "../model/model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SongAdminService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private songURL = '/api/song';

  getData(): Observable<any> {
    return this.http.get(`${this.songURL}/all`).pipe(
      tap(_ => console.log('获取歌曲列表'))
    );
  }

  editSong(song: Song): Observable<any> {
    const url = `${this.songURL}/edit`;

    return this.http.post(url, song, this.httpOptions).pipe(
      tap(_ => console.log(`更新歌曲：${song.realName}`)),
    );
  }

  addSong(song: Song): Observable<any> {
    console.log(song);
    return this.http.post<any>(`${this.songURL}/add`, song, this.httpOptions).pipe(
      tap(() => console.log(`添加新的歌曲信息，歌曲名为${song.realName}`)),
    );
  }

  deleteSong(id: number): Observable<any> {
    const url = `${this.songURL}/del/${id}`;
    return this.http.post(url, {}).pipe(
      tap(_ => console.log(`删除歌曲，ID为${id}`)),
    );
  }
}
