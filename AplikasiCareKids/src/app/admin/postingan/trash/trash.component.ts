import { Component } from '@angular/core';

//services
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {

  page: number = 1;
  alltrash: any;
  searchText: string = '';
  trash: any;
  id: any;
  constructor(private adminData: AdminService) {
    this.postinganTrash();
    this.alltrash = this.trash;
  }

  postinganTrash() {
    this.adminData.getTrash().subscribe((res: any) => {
      this.trash = res.data;
    });
  }

  restorePostingan(id: any) {
    this.adminData.getRestore(id).subscribe((res: any) => {
      this.trash = res.data;
    });
  }

  deletePermanentPostingan(id: any) {
    this.adminData.deletePermanentPostingan(id).subscribe((res: any) => {
      this.trash = res.data;
    });
  }

  search(value: string) {
    this.searchText = value;
    this.trash = this.alltrash.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
    });
  }
}
