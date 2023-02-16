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

  page: number = 1;
  allNews: any;
  searchText: string = '';
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
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      });
      this.allNews = this.news;
    });
  }

  ngOnInit(): void {

  }

  search(value: string) {
    this.searchText = value;
    this.news = this.allNews.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
    });
  }
}
