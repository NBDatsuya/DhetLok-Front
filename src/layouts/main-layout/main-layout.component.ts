import {Component} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../../service/auth.service"
import {FormsModule} from "@angular/forms";
import {catchError, of, tap} from "rxjs";
import {SongService} from "../../service/song.service";

@Component({
  selector: 'layouts-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink,
    FormsModule
  ],
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  loginDialogVisible = false;
  username: string = '';
  password: string = '';
  searchKeyword= ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private songService: SongService
  ) {
  }

  toggleDialogVisible() {
    this.loginDialogVisible = !this.loginDialogVisible
    this.clearLoginForm()
  }

  clearLoginForm() {
    this.username = ""
    this.password = ""
  }

  isLogin(): boolean {
    return this.authService.isLoggedIn;
  }

  sessionInfo(): { id: number, username: string } {
    return this.authService.sessionInfo
  }

  protected readonly alert = alert;

  login() {
    this.authService.login(this.username, this.password).pipe(
      tap((response: any) => {
        console.log(response.session);

        if (!response.code) {
          this.authService.setLoggedIn(true);

          localStorage.setItem('session', JSON.stringify(response.data));
          alert(response.msg);
          this.toggleDialogVisible();
        } else {
          alert(response.msg);
        }
      }),

      catchError((error: any) => {
        console.error('服务器异常，原因：', error);
        alert(error.message);
        return of(null); // Return a safe value or an observable to continue the stream
      })
    ).toPromise().then(r => r);
  }

  logout() {
  }

  doSearch(){
    this.songService.searchSongs(this.searchKeyword).pipe(
      tap((response: any) => {

        if (!response.code) {
          localStorage.setItem('searchResult', JSON.stringify(response.data));
          this.router.navigate(["/search"]).then(r => r)
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
  }

  protected readonly localStorage = localStorage;
}
