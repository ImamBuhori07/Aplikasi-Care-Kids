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

  carousels = [
    { path: 'assets/images/beranda/1.jpg' },
    { path: 'assets/images/beranda/2.jpg' },
    { path: 'assets/images/beranda/3.jpg' },
    { path: 'assets/images/beranda/4.jpg' },
    { path: 'assets/images/beranda/5.jpg' },
  ];

  page: number = 1;
  beranda: any;
  top: any;
  // news: any;
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
      console.warn(res);
    });

    // this.newsData.getNews().subscribe((res: any) => {
    //   this.news = res.data;
    //   this.news = res.data.sort((a: any, b: any) => {
    //     if (a['created_at'] > b['created_at']) {
    //       return -1;
    //     } else if (a['created_at'] < b['created_at']) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   });
    //   console.warn(res);
    // });

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
      console.warn(res);
    });

    this.aboutData.getAbout().subscribe((res: any) => {
      this.about = res.data;
      console.warn(res);
    });
  }

  ngOnInit(): void {

  }

}
