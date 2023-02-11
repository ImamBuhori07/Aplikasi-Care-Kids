import { Component, OnInit } from '@angular/core';

//services
import { BerandaService } from '../services/beranda.service';
import { NewsService } from '../services/news.service';
import { EducationService } from '../services/education.service';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  page: number = 1;
  beranda: any;
  news: any;
  education: any;
  about: any;

  constructor(private berandaData: BerandaService, private newsData: NewsService, private educationData: EducationService, private aboutData: AboutService) {
    this.berandaData.getAll().subscribe((res: any) => {
      this.berandaData = res.data;
      console.warn(res);
    });

    this.newsData.getNews().subscribe((res: any) => {
      this.news = res.data;
      console.warn(res);
    });

    this.educationData.getEducation().subscribe((res: any) => {
      this.education = res.data;
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
