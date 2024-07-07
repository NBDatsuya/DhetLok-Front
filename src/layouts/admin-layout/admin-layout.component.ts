import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink,
    FormsModule,
    MatNavList,
    MatListItem,
    NgForOf
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  constructor(private router: Router) {
  }

  menuList = [
    {
      path: '/admin/index',
      title: "首页",
      isActive: false
    }, {
      path: '/admin/song',
      title: "歌曲管理",
      isActive: false
    }, {
      path: '/admin/artist',
      title: "歌手管理",
      isActive: false
    }, {
      path: '/home',
      title: "退出登录",
      isActive: false
    }
  ]

  async navigate(index: number) {
    this.menuList.forEach((item, i) => item.isActive = i === index);
    await this.router.navigate([this.menuList[index].path])
  }
}
