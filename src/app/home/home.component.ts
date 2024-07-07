import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {AuthService} from '../../service/auth.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ArtistService} from "../../service/artist.service";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loginDialogVisible = false;

  username: string = '';
  password: string = '';


    constructor(
      private router: Router,
      private artistService: ArtistService
    ) {
    }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.artistService.getHotArtists().subscribe(
      (res: any) => {
        console.log(res)
        this.artists = res["data"]
      },
      (error) => {
        console.error('Error fetching artists:', error);
      }
    );
  }

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

  artists = [{
    "id": 0,
    "realName": "real_name",
    'imgUrl': "imgUrl",
    "genre":0,
    "hot":false
  },]


}
