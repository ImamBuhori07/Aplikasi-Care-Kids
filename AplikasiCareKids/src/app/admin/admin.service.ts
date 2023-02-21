import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin, article, Category, savearticle, saveCategory, savestatusarticle, statusarticle } from './admin.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }

  listArticle() {
    return this.http.get<article[]>(`${environment.baseUrl}api/article`)
  }

  savearticle(article: savearticle) {
    return this.http.post(`${environment.baseUrl}/api/article`, article, { observe: "response" })
  }

  FindarticleById(articleId: number) {
    return this.http.get<article>(`${environment.baseUrl}/api/article/${articleId}`)
  }

  deletearticle(articleId: number) {
    return this.http.delete(`${environment.baseUrl}/api/article/${articleId}`, { observe: "response" })
  }

  getReadArticlebyUser(author: string) {
    return this.http.get<article>(`${environment.baseUrl}/api/article/user/${author}`)
  }

  listcategory() {
    return this.http.get<Category[]>(`${environment.baseUrl}/api/category`)
  }

  savecategory(category: saveCategory) {
    return this.http.post(`${environment.baseUrl}/api/category`, category, { observe: "response" })
  }

  updatecategory(category: saveCategory) {
    return this.http.put(`${environment.baseUrl}/api/category`, category, { observe: "response" })
  }

  deletecategory(category_id: number) {
    return this.http.delete(`${environment.baseUrl}/api/category/${category_id}`, { observe: "response" })
  }

  liststatuscategory() {
    return this.http.get<statusarticle[]>(`${environment.baseUrl}/api/status`)
  }

  savestatusarticle(statusarticle: savestatusarticle) {
    return this.http.post(`${environment.baseUrl}/api/status`, statusarticle, { observe: "response" })
  }

  updatestatusarticle(statusarticle: savestatusarticle) {
    return this.http.put(`${environment.baseUrl}/api/status`, statusarticle, { observe: "response" })
  }


}
