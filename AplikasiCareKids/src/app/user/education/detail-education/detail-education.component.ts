import { Component, OnInit } from '@angular/core';

//services
import { EducationService } from '../../services/education.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-education',
  templateUrl: './detail-education.component.html',
  styleUrls: ['./detail-education.component.css']
})
export class DetailEducationComponent implements OnInit {


  education: any;
  constructor(private route: ActivatedRoute, private detailData: EducationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id && this.detailData.getEducationById(id).subscribe((res: any) => {
      this.education = Array.of(res.data);
      console.warn(this.education);
    }, (err: any) => {
      console.warn(err);
    });
  }



}
