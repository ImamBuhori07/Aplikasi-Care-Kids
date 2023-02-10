import { Component, OnInit } from '@angular/core';

//services
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {

  news: any;
  id: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.news = [];
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNews(this.id);
  }

  getNews(id : any) {
    this.http.get('http://127.0.0.1:8000/api/article/' + id).subscribe((res: any) => {
      this.news = Array.of(res.data);
      console.log(this.news);
    });
  }
}
