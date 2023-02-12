import { Component, OnInit } from '@angular/core';

//services
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'News';

  search: string = '';
  page: number = 1;
  news: any;
  constructor(private newsData: NewsService) {
    this.newsData.getNews().subscribe((res: any) => {
      this.news = res.data;
      this.news = res.data.sort((a: any, b: any) => {
        if (a['created_at'] > b['created_at']) {
          return -1;
        } else if (a['created_at'] < b['created_at']) {
          return 1;
        } else {
          return 0;
        }
      });
      console.warn(res);
    });
  }

  ngOnInit(): void {

  }
}
