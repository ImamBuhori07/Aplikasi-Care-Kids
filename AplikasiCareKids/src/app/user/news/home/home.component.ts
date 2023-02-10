import { Component, OnInit } from '@angular/core';


//services
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: string = '';
  page: number = 1;
  news: any;
  constructor(private http: HttpClient) {
    this.news = [];
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.http.get('http://127.0.0.1:8000/api/article/category/1').subscribe((res: any) => {
      this.news = res.data;
      console.log(this.news);
    });
  }
}
