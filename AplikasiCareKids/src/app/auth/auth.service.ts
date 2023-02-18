import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, login,register} from './auth.model';
import { catchError, map, Observable, of, pipe, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './register/register.component';



  const AUTH_API = 'http://127.0.0.1:8000/api/';

  const httpOptions = {
     headers: new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private cookieservice:CookieService) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${AUTH_API}login`, {
      email,
      password
    }, httpOptions);
  }

  register(email: string,full_name: string, password: string,password_confirmation: string): Observable<any> {
    return this.http.post(`${AUTH_API}register`,{ email,full_name,password,password_confirmation}, httpOptions)
    .pipe(
      catchError(error => {
        console.log(error);
        return of (null)
      })
    );
  }

  logout():Observable<any>{
    return this.http.post(`${AUTH_API}logout`,{}, httpOptions)
    .pipe (
      catchError(error => {
        console.log(error);
        return of (null);
      })
    )
  }

  setToken(token:string):void{
    this.cookieservice.set('token',token);
  }

  gettoken():string{
    return this.cookieservice.get('token')
  }

  removetoken():void{
    this.cookieservice.delete('token')
  }

}



