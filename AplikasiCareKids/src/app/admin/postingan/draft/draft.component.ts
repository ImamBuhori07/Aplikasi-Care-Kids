import { Component, OnInit } from '@angular/core';

//services
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  page: number = 1;
  alldraft: any;
  searchText: string = '';
  draft: any;
  constructor(private adminData: AdminService) {
    this.postinganDraft();
    this.alldraft = this.draft;
  }

  postinganDraft() {
    this.adminData.getDraft().subscribe((res: any) => {
      this.draft = res.data;
    });
  }

  ngOnInit(): void {

  }

  search(value: string) {
    this.searchText = value;
    this.draft = this.alldraft.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
    });
  }

  deletePostingan(id: any) {
    this.adminData.deletePostingan(id).subscribe((res: any) => {
      this.postinganDraft();
    });
  }
}
