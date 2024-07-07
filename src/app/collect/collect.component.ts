import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CollectService} from "../../service/collect.service";
import { AuthService } from '../../service/auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-collect',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './collect.component.html',
  styleUrl: './collect.component.css'
})
export class CollectComponent implements OnInit {
  collectList = [
    {
      "id": "id",
      "realName": "real_name",
      "artist": 0,
      "genre":0
    }
  ]
  constructor(private collectService: CollectService,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }
  async refreshList() {
    if (!this.authService.isLoggedIn) {
      //测，你这打印在控制台给谁看啊
      alert('请您先登录')
      await this.router.navigate(['/home'])
      return;
    }

    const id = this.authService.sessionInfo.id

    this.collectService.getMyCollect(id).subscribe(
      (res: any) => {
        console.log(res);
        this.collectList = res["data"];
      },
      error => {
        console.error('获取收藏列表时出错:', error);
      }
    );
  }

}


