import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pesan',
  templateUrl: './pesan.component.html',
  styleUrls: ['./pesan.component.css']
})
export class PesanComponent {

  constructor(private adminService: AdminService) { }

  pesan: any;

  ngOnInit() {
    this.getpesan();
  }

  getpesan() {
    this.adminService.getPesan().subscribe((res: any) => {
      this.pesan = res.data.sort((a: any, b: any) => {
        if (a['created_at'] > b['created_at']) {
          return -1;
        } else if (a['created_at'] < b['created_at']) {
          return 1;
        }
        return 0;
      });
    });
  }

  delPesan(id: any) {
    this.adminService.delPesan(id).subscribe((res: any) => {
      this.getpesan();
    });
  }

}
