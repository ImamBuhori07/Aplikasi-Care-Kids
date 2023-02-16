import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin , Category , saveCategory} from './admin.model';
import { environment } from 'src/environments/environment';
import { response } from 'express';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
    get<T>(arg0: string) {
      throw new Error('Method not implemented.');
    }
 
    private baseUrl = 'http://127.0.0.1:8000';

    constructor(private http:HttpClient){}



    getCategories<T>(url : String): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${url}`);
    }

    buatCategories<T>(url : String, data : any): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${url}`,data);
    }

    updatecategories<T>(url : String, data : any): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${url}`, data);
    }

    deletecategories<T>(url : string): Observable<T> {
      return this.http.delete<T>(`${this.baseUrl}/${url}`);
    }


}
