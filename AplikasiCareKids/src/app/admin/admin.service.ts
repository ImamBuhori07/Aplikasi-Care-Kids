import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin , Category , saveCategory} from './admin.model';
import { environment } from 'src/environments/environment';
import { response } from 'express';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
 


    constructor(private http:HttpClient){}


  // getCategory(){
  //   this.http.get([])
  // }

}
