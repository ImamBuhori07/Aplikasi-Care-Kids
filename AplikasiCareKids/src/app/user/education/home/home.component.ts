import { Component, OnInit } from '@angular/core';

//services
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  url(arg0: any) {
    throw new Error('Method not implemented.');
  }

  education: any;
  constructor(private http: HttpClient) {
    this.education = [];
  }

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation() {
    this.http.get('http://127.0.0.1:8000/api/article/category/2').subscribe((res: any) => {
      this.education = res.data;
      console.log(this.education);
    });
  }
}
