import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BerandaService {


  url = 'http://127.0.0.1:8000/api/article/';
  carousels = 'http://127.0.0.1:8000/api/carousel';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getCarousel() {
    return this.http.get(this.carousels);
  }
}
