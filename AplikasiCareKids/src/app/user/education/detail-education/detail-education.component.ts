import { Component, OnInit } from '@angular/core';

//services
import { EducationService } from '../../services/education.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//class
import { Comment } from '../../classes/comment';
@Component({
  selector: 'app-detail-education',
  templateUrl: './detail-education.component.html',
  styleUrls: ['./detail-education.component.css']
})
export class DetailEducationComponent implements OnInit {

  CommentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });
  education: any;
  constructor(private route: ActivatedRoute, private detailData: EducationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id && this.detailData.getEducationById(id).subscribe((res: any) => {
      this.education = Array.of(res.data);
      console.warn(this.education);
    });
  }

  onSubmit(CommentForm: Comment) {
    console.warn(CommentForm);
    let article_id = this.route.snapshot.paramMap.get('id');
    console.warn(article_id);
  }

}


  // education: any;
  // id: any;
  // comment: any;
  // article_id: any;
  // constructor(private http: HttpClient, private route: ActivatedRoute) {
  //   this.education = [];
  //   this.comment = [];
  //   }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.getEducation(this.id);
  //   this.getComment();
  //   // this.postComment(this.article_id);
  // }

  // getEducation(id : any) {
  //   this.http.get('http://127.0.0.1:8000/api/article/' + id).subscribe((res: any) => {
  //     this.education = Array.of(res.data);
  //     console.log(this.education);
  //   });
  // }

  // getComment() {
  //   this.http.get('http://127.0.0.1:8000/api/comment').subscribe((res: any) => {
  //     this.comment = Array.of(res.data);
  //     console.log(this.comment);
  //   });
  // }

  // getCommentForm(data : any) {
  //   console.warn(data)
  //   this.comment(data).subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }

  // postComment(article_id: any, data: any) {
  //   this.http.post('http://127.0.0.1:8000/api/comment', data).subscribe((res: any) => {
  //       console.log(res);
  //       });
  // }
