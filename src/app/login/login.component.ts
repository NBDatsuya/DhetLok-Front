import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {catchError, of, tap} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  login() {

    this.authService.adminLogin(this.username, this.password).pipe(
      tap(async (response: any) => {

        if (!response.code) {
          this.authService.setLoggedIn(true);

          localStorage.setItem('session', JSON.stringify(response.data));

          await this.router.navigate(['/admin/index'])
        } else {
          alert("登陆失败，用户名或密码错误");
        }
      }),

      catchError((error: any) => {
        console.error('服务器异常，原因：', error);
        alert(error.message);
        return of(null); // Return a safe value or an observable to continue the stream
      })
    ).toPromise().then(r => r);
  }

  async goToRegister() {
    await this.router.navigate(['/register']);
  }

}
