import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  url = 'http://127.0.0.1:8000/api/article/category/1'
  detail = "http://127.0.0.1:8000/api/news/";
  comment = "http://127.0.0.1:8000/api/comment";
  image = "http://127.0.0.1:8000/api/image/"

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url);
  }

  getNewsById(id: string) {
    return this.http.get(this.detail + id);
  }

  getImage(article_id: string) {
    return this.http.get(this.image + article_id);
  }

  postComment(CommentForm: Comment, article_id: string): Observable<Comment> {
    return this.http.post<Comment>(this.comment + '/' + article_id, CommentForm);
  }

  getComment(article_id: string) {
    return this.http.get(this.comment + '/' + article_id);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      errorMessage = `Backend returned code ${error.status}, body was: `, error.error;
    }
    // Return an observable with a user-facing error message.
    errorMessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}

