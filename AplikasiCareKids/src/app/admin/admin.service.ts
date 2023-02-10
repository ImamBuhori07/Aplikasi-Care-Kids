import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin , Category , saveCategory} from './admin.model';
import { environment } from 'src/environments/environment';
import { response } from 'express';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

        getcategory(){
          return this.http.get<Category[]>(`${environment.baseUrl}/api/category`)
        }
    
        tambahcategory(category:saveCategory){
          return this.http.post<Category[]>(`${environment.baseUrl}/api/category`,category, {observe: "response"})
        }

        updatecategory(category:saveCategory){
          return this.http.put(`${environment.baseUrl}/category`,category, {observe:"response"})
        }

        deletecategory(name_category: string){
          return this.http.delete(`${environment.baseUrl}/name_category/delete/${Category}`,{observe:"response"})
        }
}
