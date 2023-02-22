import { Component } from '@angular/core';

import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  profile: any;
  visitor: any;
  comment: any;
  pesan: any;
  totalcomment: number = 0;
  totalpesan: number = 0;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfile();
    this.getVisit();
    this.getCommnet();
    this.getPesan();
  }

  getProfile() {
    let id = this.route.snapshot.paramMap.get('id');
    1 && this.adminService.getProfileById(1).subscribe((res: any) => {
      this.profile = Array.of(res.data);
    });
  }

  getVisit() {
    this.adminService.getVisitor().subscribe((res: any) => {
      this.visitor = Array.of(res.data);
    })
  }

  getCommnet() {
    this.adminService.getAllComment().subscribe((res: any) => {
      this.comment = res.data;
      this.totalcomment = this.comment.length;
    });
  }

  getPesan() {
    this.adminService.getPesan().subscribe((res: any) => {
      this.pesan = res.data;
      this.totalpesan = this.pesan.length;
    });
  }
}
