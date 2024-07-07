import {Component} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from '../../service/auth.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NgIf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginDialogVisible = false;
  username: string = '';
  password: string = '';

  /*
    constructor(
      private router: Router,
      private authService: AuthService
    ) {
    }*/

  toggleDialogVisible() {
    this.loginDialogVisible = !this.loginDialogVisible
  }

  protected readonly alert = alert;

  login() {
    /*console.log(this.username, this.password)
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
      });*/
  }
}
