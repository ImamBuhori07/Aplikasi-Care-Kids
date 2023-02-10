import { Component, OnInit } from '@angular/core';

//my modules
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  page: number = 1;
  news: any;
  education: any;
  constructor(private http: HttpClient) {
    this.news = [];
    this.education = [];
  }

  ngOnInit(): void {
    this.getNews();
    this.getEducation();
  }

  getNews() {
    this.http.get('http://127.0.0.1:8000/api/article/category/1').subscribe((res: any) => {
      this.news = res.data;
      console.log(this.news);
    });
  }

  getEducation() {
    this.http.get('http://127.0.0.1:8000/api/article/category/2').subscribe((res: any) => {
      this.education = res.data;
      console.log(this.education);
    });
  }

  key = 'created_at';
  reverse = true;
  sortByDate(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
