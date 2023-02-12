import { Component, OnInit } from '@angular/core';

//services
import { HttpClient } from '@angular/common/http';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Education';

  page: number = 1;
  url(arg0: any) {
    throw new Error('Method not implemented.');
  }

  education: any;
  constructor(private http: HttpClient, private educationData: EducationService) {
    this.educationData.getEducation().subscribe((res: any) => {
      this.education = res.data;
      console.warn(res);
    });
  }

  ngOnInit(): void {

  }

  keywordValue: string = '';
}
