import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  postComment(article_id: string, CommentForm: Comment) {
    throw new Error('Method not implemented.');
  }

  url = "http://127.0.0.1:8000/api/article/category/2";
  detail = "http://127.0.0.1:8000/api/article/";
  comment = "http://127.0.0.1:8000/api/comment";
  education: any;
  constructor(private http: HttpClient) { }

  getEducation() {
    return this.http.get(this.url);
  }

  getEducationById(id: string) {
    return this.http.get(this.detail + id);
  }
}
