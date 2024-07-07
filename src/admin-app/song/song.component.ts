import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/model";
import {SongAdminService} from "../../service/song-admin.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {tap} from "rxjs";

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent implements OnInit {
  items: Song[] = [];
  selectedItem: Song = this.resetItem(false);

  constructor(private dataService: SongAdminService) {
  }

  ngOnInit() {
    this.refreshList()
  }

  async refreshList() {
    this.dataService.getData().pipe(tap(
      (response: any) => {
        this.items = response.data;
      })).subscribe();
  }

  resetItem(refreshList: boolean = true): Song {
    if (refreshList) this.refreshList().then()
    return {id: 0, realName: '', artist: '', fileUrl: '', hits: 0, genre: 0};
  }

  addOrUpdateItem() {
    if (!confirm("请确认是否提交")) return
    if (this.selectedItem.id === 0) {
      this.dataService.addSong(this.selectedItem).subscribe();
    } else {
      this.dataService.editSong(this.selectedItem).subscribe();
    }
    alert("提交成功！")
    this.selectedItem = this.resetItem();
  }

  editItem(Song: Song) {
    this.selectedItem = {...Song};
  }

  deleteItem(id: number) {
    let result = confirm("请问要删除吗？ 删除的数据无法恢复！")
    if (!result) return

    this.dataService.deleteSong(id).subscribe();
    alert("删除成功")

    this.selectedItem = this.resetItem();
  }
}
