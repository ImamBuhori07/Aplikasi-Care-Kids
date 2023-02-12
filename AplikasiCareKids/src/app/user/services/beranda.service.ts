import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BerandaService {


  urlAll = 'http://127.0.0.1:8000/api/article/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.urlAll);
  }
}
