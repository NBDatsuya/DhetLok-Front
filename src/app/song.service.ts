import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap,} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";

export interface Artist {
  id: number;
  artist_name: string;
  style: number;
  img_url: string;
  hot: boolean;
}

export interface Song {
  id: number;
  song_name: string;
  singer: string;
  file_url: string;
  hits: number;
  style: number;
}

@Injectable({
  providedIn: 'root'
})

export class SongService {
  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }

  // 可赋值一个变量，泛型编程
  private handleError<T>(operation = '', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation}发生错误：${error.message}`);
      return of(result as T)
    }
  }

  private log(message: string): void {
    console.log(message);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private songURL = 'http://127.0.0.1:5000/api/';

  getArtists(): Observable<Artist[]> {
    const url = `${this.songURL}/getartists`;
    console.log(url);
    return this.http.get<Artist[]>(url).pipe(
      tap(_ => this.log('获取艺术家列表')),
      catchError(this.handleError<Artist[]>('getArtists', []))
    );
  }
    searchSongs(singer: string): Observable<Song[]> {
    console.log(`搜索歌手: ${singer} 的歌曲`);
    const url = `${this.songURL}/api/searchsong?singer=${encodeURIComponent(singer)}`;
    return this.http.get<Song[]>(url).pipe(
      tap(_ => this.log(`搜索到歌手: ${singer} 的歌曲`)),
      catchError(this.handleError<Song[]>('searchSongs', []))
    );
  }

  updateSong(song: Song): Observable<any> {
    const url = `${this.songURL}/updatesong/${song.id}`;
    const updateData = {
      song_name: song.song_name,
      singer: song.singer,
      file_url: song.file_url,
      hits: song.hits,
      style: song.style
    };

    return this.http.post(url, updateData, this.httpOptions).pipe(
      tap(_ => this.log(`更新歌曲：${song.song_name}`)),
      catchError(this.handleError<any>('updateSong'))
    );
  }
  addSong(song: Song): Observable<any> {
    console.log(song);
    return this.http.post<any>(`${this.songURL}/addsong`, song, this.httpOptions).pipe(
      tap(() => this.log(`添加新的歌曲信息，歌曲名为${song.song_name}`)),
      catchError(this.handleError<any>('addSong'))
    );
  }
  deleteSong(id: number): Observable<any> {
    const url = `${this.songURL}/deletesong/${id}`;
    return this.http.post(url, null, this.httpOptions).pipe(
      tap(_ => this.log(`删除歌曲，ID为${id}`)),
      catchError(this.handleError<any>('deleteSong'))
    );
  }

}
