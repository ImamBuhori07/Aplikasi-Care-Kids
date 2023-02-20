import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Admin , article, Category , savearticle, saveCategory} from './admin.model';
import { environment } from 'src/environments/environment';
import { response } from 'express';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
    private baseUrl = 'http://127.0.0.1:8000';

    constructor(private http:HttpClient){}

    getCategories(url : String) {
        return this.http.get(`${this.baseUrl}/${url}`);
    }

    buatCategories(url : String, data : any) {
        return this.http.post(`${this.baseUrl}/${url}`,data);
    }

    updatecategories(url : String, data : any) {
        return this.http.put(`${this.baseUrl}/${url}`, data);
    }

    deletecategories(url : string) {
      return this.http.delete(`${this.baseUrl}/${url}`);
    }

    getarticles(url : string){
      return this.http.get(`${this.baseUrl}/${url}`);
    }

    getarticlesbycategory(Category_id : number){
      return this.http.get(`${this.baseUrl}/article/category/${Category_id}`);
    }

    getarticlesbystatus(status : string){
      return this.http.get(`${this.baseUrl}/getarticlebystatus/${status}`);
    }

    getarticlesbyuser(userId : number){
      return this.http.get(`${this.baseUrl}/article/user/${userId}`);
    }

    getarticlestrash():Observable<any>{
      return this.http.get(`${this.baseUrl}/getarticletrash`);
    }

    getforcedelete(id:number): Observable<any>{
      return this.http.get(`${this.baseUrl}/getforcedelete/${id}`);
    }

    savearticle(article: savearticle){
      return this.http.post(`${environment.baseUrl}/article/save`, article,{observe : "response"})
    }

    updatearticles(url : String, data : any) {
        return this.http.put(`${this.baseUrl}/${url}`, data);
    }

    deletearticles(url : string) {
      return this.http.delete(`${this.baseUrl}/${url}`);
    }

    searchbytitle(searchtitle: string):Observable<any>{
      const url = `${this.baseUrl}/searchbytitle?searchtitle=${searchtitle}`
      return this.http.get(url);
    }

    restorearticles():Observable<any>{
      return this.http.post(`${this.baseUrl}/restorearticle`,{});
    }

    uploadimage(imagefile: File): Observable<any>{
      const formData = new FormData();
      formData.append('image', imagefile, imagefile.name);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json'); 
      return this.http.post(`${this.baseUrl}/postuploadimage`, formData, {headers});
    }


}
