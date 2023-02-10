import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = "http://localhost:8000/api/about";

  constructor(private http: HttpClient) { }

  getAbout() {
    return this.http.get(this.url);
  }
}
