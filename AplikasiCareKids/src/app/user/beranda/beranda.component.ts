import { Component, OnInit } from '@angular/core';

//services
import { BerandaService } from '../services/beranda.service';
import { NewsService } from '../services/news.service';
import { EducationService } from '../services/education.service';
import { AboutService } from '../services/about.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  carousels = [];
  page: number = 1;
  beranda: any;
  top: any;
  education: any;
  about: any;

  constructor(private berandaData: BerandaService, private newsData: NewsService, private educationData: EducationService, private aboutData: AboutService) {
    this.berandaData.getAll().subscribe((res: any) => {
      this.berandaData = res.data;
      this.beranda = res.data.sort((a: any, b: any) => {
        if (a['created_at'] > b['created_at']) {
          return -1;
        } else if (a['created_at'] < b['created_at']) {
          return 1;
        } else {
          return 0;
        }
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      });
    });

    this.educationData.getEducation().subscribe((res: any) => {
      this.education = res.data;
      this.education = res.data.sort((a: any, b: any) => {
        if (a['view_count'] > b['view_count']) {
          return -1;
        } else if (a['view_count'] < b['view_count']) {
          return 1;
        } else {
          return 0;
        }
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      }).slice(0, 5);
    });

    this.aboutData.getAbout().subscribe((res: any) => {
      this.about = res.data;
    });
  }

  ngOnInit(): void {
    this.getCarousel();
  }

  getCarousel() {
    this.berandaData.getCarousel().subscribe((res: any) => {
      this.carousels = res.data;
    });
  }

}
