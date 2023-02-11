import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://127.0.0.1:8000/api/article/category/1'

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url);
  }
}
