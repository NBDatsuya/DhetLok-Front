import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap,} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


import {Song, Artist} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private apiUrl:string = '/api/song'
  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {
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


/*
  getArtists(): Observable<Artist[]> {
    const url = `${this.apiUrl}/getartists`;
    console.log(url);
    return this.http.get<Artist[]>(url).pipe(
      tap(_ => this.log('获取艺术家列表')),
      catchError(this.handleError<Artist[]>('getArtists', []))
    );
  }*/
  searchSongs(keyword: string): Observable<any> {
    const url = [
      this.apiUrl,
      "/search?",
      `keyword=${encodeURIComponent(keyword)}`,
    ].join("")

    return this.http.get(url)
  }
/*
  updateSong(song: Song): Observable<any> {
    const url = `${this.songURL}/updatesong/${song.id}`;
    const updateData = {
      realName: song.realName,
      artist: song.artist,
      file_url: song.file_url,
      hits: song.hits,
      genre: song.genre
    };

    return this.http.post(url, updateData, this.httpOptions).pipe(
      tap(_ => this.log(`更新歌曲：${song.realName}`)),
      catchError(this.handleError<any>('updateSong'))
    );
  }
  addSong(song: Song): Observable<any> {
    console.log(song);
    return this.http.post<any>(`${this.songURL}/addsong`, song, this.httpOptions).pipe(
      tap(() => this.log(`添加新的歌曲信息，歌曲名为${song.realName}`)),
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
*/
}
