import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../classes/register';
import { Login } from '../classes/login';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogin$ = new BehaviorSubject<boolean>(false);
  isLogin$ = this._isLogin$.asObservable();

  get token() {
    return localStorage.getItem('token');
  }

  urlregister = "http://127.0.0.1:8000/api/register";
  urllogin = "http://127.0.0.1:8000/api/login";

  constructor(private http: HttpClient) {
    this._isLogin$.next(!!this.token);
  }

  postRegister(data: Register): Observable<Register> {
    return this.http.post<Register>(this.urlregister, data);
  }

  postLogin(data: Login): Observable<Login> {
    return this.http.post<Login>(this.urllogin, data).pipe(
      tap((res: any) => {
        this._isLogin$.next(true);
        localStorage.setItem('token', res.access_token);
      })
    );
  }
}
