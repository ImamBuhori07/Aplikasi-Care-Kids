import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Comment } from '../classes/comment';
import { catchError, Observable, pipe, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {


  search = "http://127.0.0.1:8000/api/article/search/}";
  url = "http://127.0.0.1:8000/api/article/category/2";
  detail = "http://127.0.0.1:8000/api/article/";
  comment = "http://127.0.0.1:8000/api/comment";
  image = "http://127.0.0.1:8000/api/image/"
  education: any;
  constructor(private http: HttpClient) { }


  searchEducation(keyboard: string) {
    return this.http.get(this.search + keyboard);
  }

  getEducation() {
    return this.http.get(this.url);
  }

  getEducationById(id: string) {
    return this.http.get(this.detail + id).pipe(
      catchError(this.handleError)
    );
  }

  getImage(article_id: string): Observable<any> {
    return this.http.get(this.image + article_id);
  }

  postComment(CommentForm: Comment, article_id: string): Observable<any> {
    return this.http.post<Comment>(this.comment + '/' + article_id, CommentForm);
  }

  getComment(article_id: string): Observable<any> {
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
