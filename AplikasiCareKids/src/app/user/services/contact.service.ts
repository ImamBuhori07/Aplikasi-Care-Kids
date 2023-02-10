import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  urlsetting = "http://localhost:8000/api/setting";
  urlcontact = "http://localhost:8000/api/contact";

  constructor(private http: HttpClient) { }

  getSetting() {
    return this.http.get(this.urlsetting);
  }

  postContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.urlcontact, data);
  }

}
