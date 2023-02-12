import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class MyinterceptorInterceptor implements HttpInterceptor {

  constructor(private authservice:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.authservice.gettoken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
