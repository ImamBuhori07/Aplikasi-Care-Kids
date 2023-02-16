import { Component, OnInit } from '@angular/core';

//services
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Education';

  page: number = 1;
  allEducation: any;
  searchText: string = '';
  education: any;
  constructor(private educationData: EducationService) {
    this.educationData.getEducation().subscribe((res: any) => {
      this.education = res.data.sort((a: any, b: any) => {
        if (a['created_at'] > b['created_at']) {
          return -1;
        } else if (a['created_at'] < b['created_at']) {
          return 1;
        } else {
          return 0;
        }
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      });
      this.allEducation = this.education;
      console.warn(this.education);

    });
  }

  ngOnInit(): void {
  }

  search(value: string) {
    this.searchText = value;
    this.education = this.allEducation.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
    });
  }
}
