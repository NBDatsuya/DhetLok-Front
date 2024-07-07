import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  /*
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

    login() {
      console.log(this.username, this.password)
      this.authService.login(this.username, this.password)
        .subscribe((response: any) => {
          console.log(response.session);
          if (response.status === 'success' && response.flag === 1) {
            this.authService.setLoggedIn(true);
            localStorage.setItem('session', JSON.stringify(response.session));
            this.router.navigate(['/dashboard']);
            alert('Login success');
          } else {
            alert('Login failed');
          }
        });
    }

    goToRegister() {
      this.router.navigate(['/register']);
    }*/
  protected readonly alert = alert;
}
