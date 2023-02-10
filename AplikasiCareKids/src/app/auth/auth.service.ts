import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth.model';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { map, Observable } from 'rxjs';


  const AUTH_API = 'http://127.0.0.1:8000/api/login';

  const httpOptions = {
     headers: new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(email:string, fullname:string, password:string, confpassword:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      fullname,
      password,
      confpassword
    }, httpOptions);
  }

}



