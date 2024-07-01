import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private apiUrl = 'http://localhost:4200/api';  // 设置后端API基地址

  constructor(private http: HttpClient, private router: Router) {
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', String(value));
  }

  get isLoggedIn() {
    console.log(JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString()))
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  get sessionInfo() {
    return JSON.parse(localStorage.getItem('session') || '{}')
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      username: username,
      password: password
    });
  }

  register(username: string, password: string, flag: number = 0): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {username, password, flag});
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this.setLoggedIn(false);
      })
    );
  }
}
