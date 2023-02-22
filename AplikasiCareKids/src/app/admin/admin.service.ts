import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { article, Category, savearticle, saveCategory, savestatusarticle, statusarticle } from './admin.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //url
  profile = 'http://127.0.0.1:8000/api/profile';
  visitor = 'http://127.0.0.1:8000/api/visitor';
  comment = 'http://127.0.0.1:8000/api/comment';
  pesan = 'http://localhost:8000/api/contact';


  constructor(private http: HttpClient) {
    this.getVisitor();
    this.getAllComment();
    this.getPesan();
  }

  listArticle() {
    return this.http.get<article[]>(`${environment.baseUrl}/article`)
  }

  //dashboard
  getProfileById(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.profile + '/' + id, { headers: headers })
  }

  getVisitor() {
    return this.http.get(this.visitor);
  }

  getAllComment() {
    return this.http.get(this.comment);
  }

  getPesan() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.pesan, { headers: headers });
  }


  savearticle(article: savearticle) {
    return this.http.post(`${environment.baseUrl}/article`, article, { observe: "response" })
  }

  Updatearticle(article: savearticle) {
    return this.http.put(`${environment.baseUrl}/article`, article, { observe: "response" })
  }

  FindarticleById(articleId: number) {
    return this.http.get<article[]>(`${environment.baseUrl}/article/${articleId}`)
  }

  deletearticle(articleId: number) {
    return this.http.delete(`${environment.baseUrl}/article/${articleId}`, { observe: "response" })
  }

  getReadArticlebyUser(author: string) {
    return this.http.get<article>(`${environment.baseUrl}/article/user/${author}`)
  }

  listcategory() {
    return this.http.get<Category[]>(`${environment.baseUrl}/category`)
  }

  savecategory(category: saveCategory) {
    return this.http.post(`${environment.baseUrl}/category`, category, { observe: "response" })
  }

  Updatecategory(category: saveCategory) {
    return this.http.put(`${environment.baseUrl}/category`, category, { observe: "response" })
  }

  deletecategory(category_id: number) {
    return this.http.delete(`${environment.baseUrl}/category/${category_id}`, { observe: "response" })
  }

  liststatuscategory() {
    return this.http.get<statusarticle[]>(`${environment.baseUrl}/status`)
  }

  savestatusarticle(statusarticle: savestatusarticle) {
    return this.http.post(`${environment.baseUrl}/status`, statusarticle, { observe: "response" })
  }

  updatestatusarticle(statusarticle: savestatusarticle) {
    return this.http.put(`${environment.baseUrl}/status`, statusarticle, { observe: "response" })
  }


}
