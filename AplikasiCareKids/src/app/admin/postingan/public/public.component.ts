import { Component, OnInit } from '@angular/core';

//services
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  page: number = 1;
  allpostingan: any;
  searchText: string = '';
  postingan: any;
  constructor(private adminData: AdminService) {
    this.postinganPublic();
    this.allpostingan = this.postingan;
  }

  postinganPublic() {
    this.adminData.getPublic().subscribe((res: any) => {
      this.postingan = res.data;
    });
  }

  ngOnInit(): void {
  }

  search(value: string) {
    this.searchText = value;
    this.postingan = this.allpostingan.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
    });
  }

  deletePostingan(id: any) {
    this.adminData.deletePostingan(id).subscribe((res: any) => {
      this.postinganPublic();
    });
  }

}

